import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OsPolicyResourceComplianceExecResourceOutput
/** 
 * ExecResource specific output.
**/
export class OsPolicyResourceComplianceExecResourceOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=enforcementOutput" })
  enforcementOutput?: string;
}
