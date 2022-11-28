import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceExecResourceOutput
/** 
 * ExecResource specific output.
**/
export class OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceExecResourceOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enforcementOutput" })
  enforcementOutput?: string;
}
