import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MembershipSpecCertificateManagementEnum {
    CertificateManagementUnspecified = "CERTIFICATE_MANAGEMENT_UNSPECIFIED",
    Disabled = "DISABLED",
    Enabled = "ENABLED"
}


// MembershipSpec
/** 
 * **Workload Certificate**: The membership-specific input for WorkloadCertificate feature.
**/
export class MembershipSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateManagement" })
  certificateManagement?: MembershipSpecCertificateManagementEnum;
}
