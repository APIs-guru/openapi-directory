import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PostalAddress } from "./postaladdress";



// AddressVerificationData
/** 
 * Display data for verifications through postcard.
**/
export class AddressVerificationData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: PostalAddress;

  @SpeakeasyMetadata({ data: "json, name=businessName" })
  businessName?: string;
}
