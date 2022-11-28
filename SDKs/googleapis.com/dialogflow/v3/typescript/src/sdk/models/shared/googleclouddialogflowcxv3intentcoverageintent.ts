import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3IntentCoverageIntent
/** 
 * The agent's intent.
**/
export class GoogleCloudDialogflowCxV3IntentCoverageIntent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=covered" })
  covered?: boolean;

  @SpeakeasyMetadata({ data: "json, name=intent" })
  intent?: string;
}
