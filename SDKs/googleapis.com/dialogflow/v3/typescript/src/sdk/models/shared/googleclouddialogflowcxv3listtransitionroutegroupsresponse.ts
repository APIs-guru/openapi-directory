import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3TransitionRouteGroup } from "./googleclouddialogflowcxv3transitionroutegroup";


// GoogleCloudDialogflowCxV3ListTransitionRouteGroupsResponse
/** 
 * The response message for TransitionRouteGroups.ListTransitionRouteGroups.
**/
export class GoogleCloudDialogflowCxV3ListTransitionRouteGroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=transitionRouteGroups", elemType: shared.GoogleCloudDialogflowCxV3TransitionRouteGroup })
  transitionRouteGroups?: GoogleCloudDialogflowCxV3TransitionRouteGroup[];
}
