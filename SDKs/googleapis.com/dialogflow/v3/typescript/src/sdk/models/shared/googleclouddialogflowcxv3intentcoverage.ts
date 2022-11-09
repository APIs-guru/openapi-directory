import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3IntentCoverageIntent } from "./googleclouddialogflowcxv3intentcoverageintent";


// GoogleCloudDialogflowCxV3IntentCoverage
/** 
 * Intent coverage represents the percentage of all possible intents in the agent that are triggered in any of a parent's test cases.
**/
export class GoogleCloudDialogflowCxV3IntentCoverage extends SpeakeasyBase {
  @Metadata({ data: "json, name=coverageScore" })
  coverageScore?: number;

  @Metadata({ data: "json, name=intents", elemType: shared.GoogleCloudDialogflowCxV3IntentCoverageIntent })
  intents?: GoogleCloudDialogflowCxV3IntentCoverageIntent[];
}
