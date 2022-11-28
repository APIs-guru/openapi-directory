import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomerManagedEncryption } from "./customermanagedencryption";



// Replica
/** 
 * Represents a Replica for this Secret.
**/
export class Replica extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerManagedEncryption" })
  customerManagedEncryption?: CustomerManagedEncryption;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;
}
