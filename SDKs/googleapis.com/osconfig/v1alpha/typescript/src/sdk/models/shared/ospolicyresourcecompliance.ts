import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OsPolicyResourceConfigStep } from "./ospolicyresourceconfigstep";
import { OsPolicyResourceComplianceExecResourceOutput } from "./ospolicyresourcecomplianceexecresourceoutput";

export enum OsPolicyResourceComplianceStateEnum {
    OsPolicyComplianceStateUnspecified = "OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED"
,    Compliant = "COMPLIANT"
,    NonCompliant = "NON_COMPLIANT"
,    Unknown = "UNKNOWN"
,    NoOsPoliciesApplicable = "NO_OS_POLICIES_APPLICABLE"
}


// OsPolicyResourceCompliance
/** 
 * Compliance data for an OS policy resource.
**/
export class OsPolicyResourceCompliance extends SpeakeasyBase {
  @Metadata({ data: "json, name=configSteps", elemType: shared.OsPolicyResourceConfigStep })
  configSteps?: OsPolicyResourceConfigStep[];

  @Metadata({ data: "json, name=execResourceOutput" })
  execResourceOutput?: OsPolicyResourceComplianceExecResourceOutput;

  @Metadata({ data: "json, name=osPolicyResourceId" })
  osPolicyResourceId?: string;

  @Metadata({ data: "json, name=state" })
  state?: OsPolicyResourceComplianceStateEnum;
}
