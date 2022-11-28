import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Page } from "./googleclouddialogflowcxv3page";
import { GoogleCloudDialogflowCxV3Match } from "./googleclouddialogflowcxv3match";



// GoogleCloudDialogflowCxV3MatchIntentResponse
/** 
 * Response of MatchIntent.
**/
export class GoogleCloudDialogflowCxV3MatchIntentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentPage" })
  currentPage?: GoogleCloudDialogflowCxV3Page;

  @SpeakeasyMetadata({ data: "json, name=matches", elemType: GoogleCloudDialogflowCxV3Match })
  matches?: GoogleCloudDialogflowCxV3Match[];

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=transcript" })
  transcript?: string;

  @SpeakeasyMetadata({ data: "json, name=triggerEvent" })
  triggerEvent?: string;

  @SpeakeasyMetadata({ data: "json, name=triggerIntent" })
  triggerIntent?: string;
}
