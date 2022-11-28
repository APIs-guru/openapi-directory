import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1IntentCoverageIntent } from "./googleclouddialogflowcxv3beta1intentcoverageintent";



// GoogleCloudDialogflowCxV3beta1IntentCoverage
/** 
 * Intent coverage represents the percentage of all possible intents in the agent that are triggered in any of a parent's test cases.
**/
export class GoogleCloudDialogflowCxV3beta1IntentCoverage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=coverageScore" })
  coverageScore?: number;

  @SpeakeasyMetadata({ data: "json, name=intents", elemType: GoogleCloudDialogflowCxV3beta1IntentCoverageIntent })
  intents?: GoogleCloudDialogflowCxV3beta1IntentCoverageIntent[];
}
