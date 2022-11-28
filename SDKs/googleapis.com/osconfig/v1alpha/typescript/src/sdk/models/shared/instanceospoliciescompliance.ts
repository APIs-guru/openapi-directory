import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceOsPoliciesComplianceOsPolicyCompliance } from "./instanceospoliciescomplianceospolicycompliance";


export enum InstanceOsPoliciesComplianceStateEnum {
    OsPolicyComplianceStateUnspecified = "OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED",
    Compliant = "COMPLIANT",
    NonCompliant = "NON_COMPLIANT",
    Unknown = "UNKNOWN",
    NoOsPoliciesApplicable = "NO_OS_POLICIES_APPLICABLE"
}


// InstanceOsPoliciesCompliance
/** 
 * This API resource represents the OS policies compliance data for a Compute Engine virtual machine (VM) instance at a given point in time. A Compute Engine VM can have multiple OS policy assignments, and each assignment can have multiple OS policies. As a result, multiple OS policies could be applied to a single VM. You can use this API resource to determine both the compliance state of your VM as well as the compliance state of an individual OS policy. For more information, see [View compliance](https://cloud.google.com/compute/docs/os-configuration-management/view-compliance).
**/
export class InstanceOsPoliciesCompliance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detailedState" })
  detailedState?: string;

  @SpeakeasyMetadata({ data: "json, name=detailedStateReason" })
  detailedStateReason?: string;

  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance?: string;

  @SpeakeasyMetadata({ data: "json, name=lastComplianceCheckTime" })
  lastComplianceCheckTime?: string;

  @SpeakeasyMetadata({ data: "json, name=lastComplianceRunId" })
  lastComplianceRunId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=osPolicyCompliances", elemType: InstanceOsPoliciesComplianceOsPolicyCompliance })
  osPolicyCompliances?: InstanceOsPoliciesComplianceOsPolicyCompliance[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: InstanceOsPoliciesComplianceStateEnum;
}
