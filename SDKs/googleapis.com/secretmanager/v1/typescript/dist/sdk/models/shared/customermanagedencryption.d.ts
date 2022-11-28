import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for encrypting secret payloads using customer-managed encryption keys (CMEK).
**/
export declare class CustomerManagedEncryption extends SpeakeasyBase {
    kmsKeyName?: string;
}
