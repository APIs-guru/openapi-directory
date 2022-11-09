import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PostalAddress } from "./postaladdress";


// AddressVerificationData
/** 
 * Display data for verifications through postcard.
**/
export class AddressVerificationData extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: PostalAddress;

  @Metadata({ data: "json, name=businessName" })
  businessName?: string;
}
