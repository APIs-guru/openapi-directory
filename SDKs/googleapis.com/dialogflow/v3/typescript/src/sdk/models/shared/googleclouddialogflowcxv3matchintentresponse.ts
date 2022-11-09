import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3Page } from "./googleclouddialogflowcxv3page";
import { GoogleCloudDialogflowCxV3Match } from "./googleclouddialogflowcxv3match";


// GoogleCloudDialogflowCxV3MatchIntentResponse
/** 
 * Response of MatchIntent.
**/
export class GoogleCloudDialogflowCxV3MatchIntentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=currentPage" })
  currentPage?: GoogleCloudDialogflowCxV3Page;

  @Metadata({ data: "json, name=matches", elemType: shared.GoogleCloudDialogflowCxV3Match })
  matches?: GoogleCloudDialogflowCxV3Match[];

  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=transcript" })
  transcript?: string;

  @Metadata({ data: "json, name=triggerEvent" })
  triggerEvent?: string;

  @Metadata({ data: "json, name=triggerIntent" })
  triggerIntent?: string;
}
