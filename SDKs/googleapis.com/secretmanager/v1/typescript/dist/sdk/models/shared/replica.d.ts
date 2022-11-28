import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerManagedEncryption } from "./customermanagedencryption";
/**
 * Represents a Replica for this Secret.
**/
export declare class Replica extends SpeakeasyBase {
    customerManagedEncryption?: CustomerManagedEncryption;
    location?: string;
}
