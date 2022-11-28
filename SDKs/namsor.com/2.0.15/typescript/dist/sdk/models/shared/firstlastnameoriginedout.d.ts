import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the output of inferring the LIKELY country of Origin from a personal name.
**/
export declare class FirstLastNameOriginedOut extends SpeakeasyBase {
    countriesOriginTop?: string[];
    countryOrigin?: string;
    countryOriginAlt?: string;
    firstName?: string;
    id?: string;
    lastName?: string;
    probabilityAltCalibrated?: number;
    probabilityCalibrated?: number;
    regionOrigin?: string;
    score?: number;
    script?: string;
    subRegionOrigin?: string;
    topRegionOrigin?: string;
}
