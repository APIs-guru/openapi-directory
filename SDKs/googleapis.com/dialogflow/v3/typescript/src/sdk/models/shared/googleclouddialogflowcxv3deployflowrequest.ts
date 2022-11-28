import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3DeployFlowRequest
/** 
 * The request message for Environments.DeployFlow.
**/
export class GoogleCloudDialogflowCxV3DeployFlowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=flowVersion" })
  flowVersion?: string;
}
