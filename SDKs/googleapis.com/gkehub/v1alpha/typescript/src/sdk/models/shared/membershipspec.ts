import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MembershipSpecCertificateManagementEnum {
    CertificateManagementUnspecified = "CERTIFICATE_MANAGEMENT_UNSPECIFIED"
,    Disabled = "DISABLED"
,    Enabled = "ENABLED"
}


// MembershipSpec
/** 
 * **Workload Certificate**: The membership-specific input for WorkloadCertificate feature.
**/
export class MembershipSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateManagement" })
  certificateManagement?: MembershipSpecCertificateManagementEnum;
}
