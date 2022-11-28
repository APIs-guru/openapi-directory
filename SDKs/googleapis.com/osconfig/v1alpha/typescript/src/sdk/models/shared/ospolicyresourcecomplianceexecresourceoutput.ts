import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OsPolicyResourceComplianceExecResourceOutput
/** 
 * ExecResource specific output.
**/
export class OsPolicyResourceComplianceExecResourceOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enforcementOutput" })
  enforcementOutput?: string;
}
