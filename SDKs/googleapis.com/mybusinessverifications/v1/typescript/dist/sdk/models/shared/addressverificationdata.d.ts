import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PostalAddress } from "./postaladdress";
/**
 * Display data for verifications through postcard.
**/
export declare class AddressVerificationData extends SpeakeasyBase {
    address?: PostalAddress;
    business?: string;
    expectedDeliveryDaysRegion?: number;
}
