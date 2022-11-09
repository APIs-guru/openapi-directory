import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceOsPolicyResourceConfigStepTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Validation = "VALIDATION"
,    DesiredStateCheck = "DESIRED_STATE_CHECK"
,    DesiredStateEnforcement = "DESIRED_STATE_ENFORCEMENT"
,    DesiredStateCheckPostEnforcement = "DESIRED_STATE_CHECK_POST_ENFORCEMENT"
}


// OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceOsPolicyResourceConfigStep
/** 
 * Step performed by the OS Config agent for configuring an `OSPolicy` resource to its desired state.
**/
export class OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceOsPolicyResourceConfigStep extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=type" })
  type?: OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceOsPolicyResourceConfigStepTypeEnum;
}
