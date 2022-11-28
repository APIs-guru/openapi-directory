import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3beta1IntentCoverageIntent
/** 
 * The agent's intent.
**/
export class GoogleCloudDialogflowCxV3beta1IntentCoverageIntent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=covered" })
  covered?: boolean;

  @SpeakeasyMetadata({ data: "json, name=intent" })
  intent?: string;
}
