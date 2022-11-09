import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CloudAuditLoggingFeatureSpec
/** 
 * **Cloud Audit Logging**: Spec for Audit Logging Allowlisting.
**/
export class CloudAuditLoggingFeatureSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowlistedServiceAccounts" })
  allowlistedServiceAccounts?: string[];
}
