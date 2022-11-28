import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FirstLastNameUsRaceEthnicityOutRaceEthnicityEnum {
    WNl = "W_NL",
    Hl = "HL",
    A = "A",
    BNl = "B_NL",
    AiAn = "AI_AN",
    Pi = "PI"
}
export declare enum FirstLastNameUsRaceEthnicityOutRaceEthnicityAltEnum {
    WNl = "W_NL",
    Hl = "HL",
    A = "A",
    BNl = "B_NL",
    AiAn = "AI_AN",
    Pi = "PI"
}
/**
 * Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code.
**/
export declare class FirstLastNameUsRaceEthnicityOut extends SpeakeasyBase {
    firstName?: string;
    id?: string;
    lastName?: string;
    probabilityAltCalibrated?: number;
    probabilityCalibrated?: number;
    raceEthnicitiesTop?: string[];
    raceEthnicity?: FirstLastNameUsRaceEthnicityOutRaceEthnicityEnum;
    raceEthnicityAlt?: FirstLastNameUsRaceEthnicityOutRaceEthnicityAltEnum;
    score?: number;
    script?: string;
}
