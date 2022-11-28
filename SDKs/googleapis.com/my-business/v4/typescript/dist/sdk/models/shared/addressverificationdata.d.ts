import { SpeakeasyBase } from "../../../internal/utils";
import { PostalAddress } from "./postaladdress";
/**
 * Display data for verifications through postcard.
**/
export declare class AddressVerificationData extends SpeakeasyBase {
    address?: PostalAddress;
    businessName?: string;
}
