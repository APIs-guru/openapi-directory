import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MembershipSpecCertificateManagementEnum {
    CertificateManagementUnspecified = "CERTIFICATE_MANAGEMENT_UNSPECIFIED",
    Disabled = "DISABLED",
    Enabled = "ENABLED"
}
/**
 * **Workload Certificate**: The membership-specific input for WorkloadCertificate feature.
**/
export declare class MembershipSpec extends SpeakeasyBase {
    certificateManagement?: MembershipSpecCertificateManagementEnum;
}
