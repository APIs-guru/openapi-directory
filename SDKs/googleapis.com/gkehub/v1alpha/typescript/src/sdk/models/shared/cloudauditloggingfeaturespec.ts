import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudAuditLoggingFeatureSpec
/** 
 * **Cloud Audit Logging**: Spec for Audit Logging Allowlisting.
**/
export class CloudAuditLoggingFeatureSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowlistedServiceAccounts" })
  allowlistedServiceAccounts?: string[];
}
