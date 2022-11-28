import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FirstLastNameUsRaceEthnicityOutRaceEthnicityEnum {
    WNl = "W_NL",
    Hl = "HL",
    A = "A",
    BNl = "B_NL",
    AiAn = "AI_AN",
    Pi = "PI"
}

export enum FirstLastNameUsRaceEthnicityOutRaceEthnicityAltEnum {
    WNl = "W_NL",
    Hl = "HL",
    A = "A",
    BNl = "B_NL",
    AiAn = "AI_AN",
    Pi = "PI"
}


// FirstLastNameUsRaceEthnicityOut
/** 
 * Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code.
**/
export class FirstLastNameUsRaceEthnicityOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=probabilityAltCalibrated" })
  probabilityAltCalibrated?: number;

  @SpeakeasyMetadata({ data: "json, name=probabilityCalibrated" })
  probabilityCalibrated?: number;

  @SpeakeasyMetadata({ data: "json, name=raceEthnicitiesTop" })
  raceEthnicitiesTop?: string[];

  @SpeakeasyMetadata({ data: "json, name=raceEthnicity" })
  raceEthnicity?: FirstLastNameUsRaceEthnicityOutRaceEthnicityEnum;

  @SpeakeasyMetadata({ data: "json, name=raceEthnicityAlt" })
  raceEthnicityAlt?: FirstLastNameUsRaceEthnicityOutRaceEthnicityAltEnum;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=script" })
  script?: string;
}
