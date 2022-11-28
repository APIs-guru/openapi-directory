import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomerManagedEncryptionStatus
/** 
 * Describes the status of customer-managed encryption.
**/
export class CustomerManagedEncryptionStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kmsKeyVersionName" })
  kmsKeyVersionName?: string;
}
