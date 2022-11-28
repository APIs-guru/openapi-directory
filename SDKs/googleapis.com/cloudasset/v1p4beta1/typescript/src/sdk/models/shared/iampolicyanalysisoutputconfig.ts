import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GcsDestination } from "./gcsdestination";



// IamPolicyAnalysisOutputConfig
/** 
 * Output configuration for export IAM policy analysis destination.
**/
export class IamPolicyAnalysisOutputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcsDestination" })
  gcsDestination?: GcsDestination;
}
