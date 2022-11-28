import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contact information defining a Customer Match audience member.
**/
export declare class ContactInfo extends SpeakeasyBase {
    countryCode?: string;
    hashedEmails?: string[];
    hashedFirstName?: string;
    hashedLastName?: string;
    hashedPhoneNumbers?: string[];
    zipCodes?: string[];
}
