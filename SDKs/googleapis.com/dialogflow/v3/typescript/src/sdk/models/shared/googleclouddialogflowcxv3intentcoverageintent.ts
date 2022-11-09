import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowCxV3IntentCoverageIntent
/** 
 * The agent's intent.
**/
export class GoogleCloudDialogflowCxV3IntentCoverageIntent extends SpeakeasyBase {
  @Metadata({ data: "json, name=covered" })
  covered?: boolean;

  @Metadata({ data: "json, name=intent" })
  intent?: string;
}
