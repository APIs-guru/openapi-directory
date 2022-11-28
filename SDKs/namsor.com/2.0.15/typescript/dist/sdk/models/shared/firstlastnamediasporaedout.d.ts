import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence.
**/
export declare class FirstLastNameDiasporaedOut extends SpeakeasyBase {
    countryIso2?: string;
    ethnicitiesTop?: string[];
    ethnicity?: string;
    ethnicityAlt?: string;
    firstName?: string;
    id?: string;
    lastName?: string;
    lifted?: boolean;
    score?: number;
    script?: string;
}
