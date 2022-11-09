import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FirstLastNameUsRaceEthnicityOutRaceEthnicityEnum {
    WNl = "W_NL"
,    Hl = "HL"
,    A = "A"
,    BNl = "B_NL"
,    AiAn = "AI_AN"
,    Pi = "PI"
}

export enum FirstLastNameUsRaceEthnicityOutRaceEthnicityAltEnum {
    WNl = "W_NL"
,    Hl = "HL"
,    A = "A"
,    BNl = "B_NL"
,    AiAn = "AI_AN"
,    Pi = "PI"
}


// FirstLastNameUsRaceEthnicityOut
/** 
 * Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code.
**/
export class FirstLastNameUsRaceEthnicityOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;

  @Metadata({ data: "json, name=probabilityAltCalibrated" })
  probabilityAltCalibrated?: number;

  @Metadata({ data: "json, name=probabilityCalibrated" })
  probabilityCalibrated?: number;

  @Metadata({ data: "json, name=raceEthnicitiesTop" })
  raceEthnicitiesTop?: string[];

  @Metadata({ data: "json, name=raceEthnicity" })
  raceEthnicity?: FirstLastNameUsRaceEthnicityOutRaceEthnicityEnum;

  @Metadata({ data: "json, name=raceEthnicityAlt" })
  raceEthnicityAlt?: FirstLastNameUsRaceEthnicityOutRaceEthnicityAltEnum;

  @Metadata({ data: "json, name=score" })
  score?: number;

  @Metadata({ data: "json, name=script" })
  script?: string;
}
