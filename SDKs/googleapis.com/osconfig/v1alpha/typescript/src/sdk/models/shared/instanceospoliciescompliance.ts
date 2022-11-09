import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InstanceOsPoliciesComplianceOsPolicyCompliance } from "./instanceospoliciescomplianceospolicycompliance";

export enum InstanceOsPoliciesComplianceStateEnum {
    OsPolicyComplianceStateUnspecified = "OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED"
,    Compliant = "COMPLIANT"
,    NonCompliant = "NON_COMPLIANT"
,    Unknown = "UNKNOWN"
,    NoOsPoliciesApplicable = "NO_OS_POLICIES_APPLICABLE"
}


// InstanceOsPoliciesCompliance
/** 
 * This API resource represents the OS policies compliance data for a Compute Engine virtual machine (VM) instance at a given point in time. A Compute Engine VM can have multiple OS policy assignments, and each assignment can have multiple OS policies. As a result, multiple OS policies could be applied to a single VM. You can use this API resource to determine both the compliance state of your VM as well as the compliance state of an individual OS policy. For more information, see [View compliance](https://cloud.google.com/compute/docs/os-configuration-management/view-compliance).
**/
export class InstanceOsPoliciesCompliance extends SpeakeasyBase {
  @Metadata({ data: "json, name=detailedState" })
  detailedState?: string;

  @Metadata({ data: "json, name=detailedStateReason" })
  detailedStateReason?: string;

  @Metadata({ data: "json, name=instance" })
  instance?: string;

  @Metadata({ data: "json, name=lastComplianceCheckTime" })
  lastComplianceCheckTime?: string;

  @Metadata({ data: "json, name=lastComplianceRunId" })
  lastComplianceRunId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=osPolicyCompliances", elemType: shared.InstanceOsPoliciesComplianceOsPolicyCompliance })
  osPolicyCompliances?: InstanceOsPoliciesComplianceOsPolicyCompliance[];

  @Metadata({ data: "json, name=state" })
  state?: InstanceOsPoliciesComplianceStateEnum;
}
