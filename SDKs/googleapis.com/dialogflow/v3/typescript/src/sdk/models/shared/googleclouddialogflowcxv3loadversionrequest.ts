import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3LoadVersionRequest
/** 
 * The request message for Versions.LoadVersion.
**/
export class GoogleCloudDialogflowCxV3LoadVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowOverrideAgentResources" })
  allowOverrideAgentResources?: boolean;
}
