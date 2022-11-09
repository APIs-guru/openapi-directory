import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomerManagedEncryptionStatus
/** 
 * Describes the status of customer-managed encryption.
**/
export class CustomerManagedEncryptionStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=kmsKeyVersionName" })
  kmsKeyVersionName?: string;
}
