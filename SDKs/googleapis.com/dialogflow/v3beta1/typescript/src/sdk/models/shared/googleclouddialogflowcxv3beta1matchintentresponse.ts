import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3beta1Page } from "./googleclouddialogflowcxv3beta1page";
import { GoogleCloudDialogflowCxV3beta1Match } from "./googleclouddialogflowcxv3beta1match";


// GoogleCloudDialogflowCxV3beta1MatchIntentResponse
/** 
 * Response of MatchIntent.
**/
export class GoogleCloudDialogflowCxV3beta1MatchIntentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=currentPage" })
  currentPage?: GoogleCloudDialogflowCxV3beta1Page;

  @Metadata({ data: "json, name=matches", elemType: shared.GoogleCloudDialogflowCxV3beta1Match })
  matches?: GoogleCloudDialogflowCxV3beta1Match[];

  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=transcript" })
  transcript?: string;

  @Metadata({ data: "json, name=triggerEvent" })
  triggerEvent?: string;

  @Metadata({ data: "json, name=triggerIntent" })
  triggerIntent?: string;
}
