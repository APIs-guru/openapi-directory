import { SpeakeasyBase } from "../../../internal/utils";
import { MembershipSpec } from "./membershipspec";
export declare enum FeatureSpecProvisionGoogleCaEnum {
    GoogleCaProvisioningUnspecified = "GOOGLE_CA_PROVISIONING_UNSPECIFIED",
    Disabled = "DISABLED",
    Enabled = "ENABLED"
}
/**
 * **Workload Certificate**: The Hub-wide input for the WorkloadCertificate feature.
**/
export declare class FeatureSpec extends SpeakeasyBase {
    defaultConfig?: MembershipSpec;
    provisionGoogleCa?: FeatureSpecProvisionGoogleCaEnum;
}
