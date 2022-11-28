import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3beta1DeployFlowRequest
/** 
 * The request message for Environments.DeployFlow.
**/
export class GoogleCloudDialogflowCxV3beta1DeployFlowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=flowVersion" })
  flowVersion?: string;
}
