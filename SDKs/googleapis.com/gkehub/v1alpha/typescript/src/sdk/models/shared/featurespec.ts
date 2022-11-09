import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MembershipSpec } from "./membershipspec";

export enum FeatureSpecProvisionGoogleCaEnum {
    GoogleCaProvisioningUnspecified = "GOOGLE_CA_PROVISIONING_UNSPECIFIED"
,    Disabled = "DISABLED"
,    Enabled = "ENABLED"
}


// FeatureSpec
/** 
 * **Workload Certificate**: The Hub-wide input for the WorkloadCertificate feature.
**/
export class FeatureSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultConfig" })
  defaultConfig?: MembershipSpec;

  @Metadata({ data: "json, name=provisionGoogleCa" })
  provisionGoogleCa?: FeatureSpecProvisionGoogleCaEnum;
}
