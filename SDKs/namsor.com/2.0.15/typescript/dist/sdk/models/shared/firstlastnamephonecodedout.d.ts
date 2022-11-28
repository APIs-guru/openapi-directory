import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the output of inferring the LIKELY country and phone code from a personal name and phone number.
**/
export declare class FirstLastNamePhoneCodedOut extends SpeakeasyBase {
    countryIso2?: string;
    firstName?: string;
    id?: string;
    internationalPhoneNumberVerified?: string;
    lastName?: string;
    originCountryIso2?: string;
    originCountryIso2Alt?: string;
    phoneCountryCode?: number;
    phoneCountryCodeAlt?: number;
    phoneCountryIso2?: string;
    phoneCountryIso2Alt?: string;
    phoneCountryIso2Verified?: string;
    phoneNumber?: string;
    score?: number;
    script?: string;
    verified?: boolean;
}
