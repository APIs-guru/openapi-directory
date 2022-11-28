import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomerManagedEncryption } from "./customermanagedencryption";



// Automatic
/** 
 * A replication policy that replicates the Secret payload without any restrictions.
**/
export class Automatic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerManagedEncryption" })
  customerManagedEncryption?: CustomerManagedEncryption;
}
