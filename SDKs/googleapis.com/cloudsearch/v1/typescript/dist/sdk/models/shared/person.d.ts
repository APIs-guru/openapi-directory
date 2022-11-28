import { SpeakeasyBase } from "../../../internal/utils";
import { EmailAddress } from "./emailaddress";
import { Name } from "./name";
import { PhoneNumber } from "./phonenumber";
import { Photo } from "./photo";
/**
 * Object to represent a person.
**/
export declare class Person extends SpeakeasyBase {
    emailAddresses?: EmailAddress[];
    name?: string;
    obfuscatedId?: string;
    personNames?: Name[];
    phoneNumbers?: PhoneNumber[];
    photos?: Photo[];
}
