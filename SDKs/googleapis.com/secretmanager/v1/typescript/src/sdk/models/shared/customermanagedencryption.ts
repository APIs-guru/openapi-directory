import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomerManagedEncryption
/** 
 * Configuration for encrypting secret payloads using customer-managed encryption keys (CMEK).
**/
export class CustomerManagedEncryption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;
}
