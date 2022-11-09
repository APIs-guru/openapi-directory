import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GcsDestination } from "./gcsdestination";


// IamPolicyAnalysisOutputConfig
/** 
 * Output configuration for export IAM policy analysis destination.
**/
export class IamPolicyAnalysisOutputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcsDestination" })
  gcsDestination?: GcsDestination;
}
