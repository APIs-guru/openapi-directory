import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Page } from "./googleclouddialogflowcxv3beta1page";
import { GoogleCloudDialogflowCxV3beta1Match } from "./googleclouddialogflowcxv3beta1match";



// GoogleCloudDialogflowCxV3beta1MatchIntentResponse
/** 
 * Response of MatchIntent.
**/
export class GoogleCloudDialogflowCxV3beta1MatchIntentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentPage" })
  currentPage?: GoogleCloudDialogflowCxV3beta1Page;

  @SpeakeasyMetadata({ data: "json, name=matches", elemType: GoogleCloudDialogflowCxV3beta1Match })
  matches?: GoogleCloudDialogflowCxV3beta1Match[];

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=transcript" })
  transcript?: string;

  @SpeakeasyMetadata({ data: "json, name=triggerEvent" })
  triggerEvent?: string;

  @SpeakeasyMetadata({ data: "json, name=triggerIntent" })
  triggerIntent?: string;
}
