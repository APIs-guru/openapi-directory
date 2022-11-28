import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MembershipSpec } from "./membershipspec";


export enum FeatureSpecProvisionGoogleCaEnum {
    GoogleCaProvisioningUnspecified = "GOOGLE_CA_PROVISIONING_UNSPECIFIED",
    Disabled = "DISABLED",
    Enabled = "ENABLED"
}


// FeatureSpec
/** 
 * **Workload Certificate**: The Hub-wide input for the WorkloadCertificate feature.
**/
export class FeatureSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultConfig" })
  defaultConfig?: MembershipSpec;

  @SpeakeasyMetadata({ data: "json, name=provisionGoogleCa" })
  provisionGoogleCa?: FeatureSpecProvisionGoogleCaEnum;
}
