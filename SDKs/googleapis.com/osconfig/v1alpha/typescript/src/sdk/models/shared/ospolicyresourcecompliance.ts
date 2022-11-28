import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OsPolicyResourceConfigStep } from "./ospolicyresourceconfigstep";
import { OsPolicyResourceComplianceExecResourceOutput } from "./ospolicyresourcecomplianceexecresourceoutput";


export enum OsPolicyResourceComplianceStateEnum {
    OsPolicyComplianceStateUnspecified = "OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED",
    Compliant = "COMPLIANT",
    NonCompliant = "NON_COMPLIANT",
    Unknown = "UNKNOWN",
    NoOsPoliciesApplicable = "NO_OS_POLICIES_APPLICABLE"
}


// OsPolicyResourceCompliance
/** 
 * Compliance data for an OS policy resource.
**/
export class OsPolicyResourceCompliance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configSteps", elemType: OsPolicyResourceConfigStep })
  configSteps?: OsPolicyResourceConfigStep[];

  @SpeakeasyMetadata({ data: "json, name=execResourceOutput" })
  execResourceOutput?: OsPolicyResourceComplianceExecResourceOutput;

  @SpeakeasyMetadata({ data: "json, name=osPolicyResourceId" })
  osPolicyResourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: OsPolicyResourceComplianceStateEnum;
}
