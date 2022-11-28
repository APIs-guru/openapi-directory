import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3beta1LoadVersionRequest
/** 
 * The request message for Versions.LoadVersion.
**/
export class GoogleCloudDialogflowCxV3beta1LoadVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowOverrideAgentResources" })
  allowOverrideAgentResources?: boolean;
}
