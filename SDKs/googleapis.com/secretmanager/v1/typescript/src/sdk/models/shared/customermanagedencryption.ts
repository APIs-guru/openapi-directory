import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomerManagedEncryption
/** 
 * Configuration for encrypting secret payloads using customer-managed encryption keys (CMEK).
**/
export class CustomerManagedEncryption extends SpeakeasyBase {
  @Metadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;
}
