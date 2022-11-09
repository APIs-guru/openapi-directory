import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomerManagedEncryption } from "./customermanagedencryption";


// Automatic
/** 
 * A replication policy that replicates the Secret payload without any restrictions.
**/
export class Automatic extends SpeakeasyBase {
  @Metadata({ data: "json, name=customerManagedEncryption" })
  customerManagedEncryption?: CustomerManagedEncryption;
}
