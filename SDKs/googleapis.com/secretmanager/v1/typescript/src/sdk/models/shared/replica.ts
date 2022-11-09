import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomerManagedEncryption } from "./customermanagedencryption";


// Replica
/** 
 * Represents a Replica for this Secret.
**/
export class Replica extends SpeakeasyBase {
  @Metadata({ data: "json, name=customerManagedEncryption" })
  customerManagedEncryption?: CustomerManagedEncryption;

  @Metadata({ data: "json, name=location" })
  location?: string;
}
