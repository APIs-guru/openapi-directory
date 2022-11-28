import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3IntentCoverageIntent } from "./googleclouddialogflowcxv3intentcoverageintent";



// GoogleCloudDialogflowCxV3IntentCoverage
/** 
 * Intent coverage represents the percentage of all possible intents in the agent that are triggered in any of a parent's test cases.
**/
export class GoogleCloudDialogflowCxV3IntentCoverage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=coverageScore" })
  coverageScore?: number;

  @SpeakeasyMetadata({ data: "json, name=intents", elemType: GoogleCloudDialogflowCxV3IntentCoverageIntent })
  intents?: GoogleCloudDialogflowCxV3IntentCoverageIntent[];
}
