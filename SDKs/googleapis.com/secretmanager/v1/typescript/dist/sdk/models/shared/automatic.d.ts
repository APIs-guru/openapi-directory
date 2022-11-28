import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerManagedEncryption } from "./customermanagedencryption";
/**
 * A replication policy that replicates the Secret payload without any restrictions.
**/
export declare class Automatic extends SpeakeasyBase {
    customerManagedEncryption?: CustomerManagedEncryption;
}
