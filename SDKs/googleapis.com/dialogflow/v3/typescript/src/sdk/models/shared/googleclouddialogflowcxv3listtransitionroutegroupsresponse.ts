import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3TransitionRouteGroup } from "./googleclouddialogflowcxv3transitionroutegroup";



// GoogleCloudDialogflowCxV3ListTransitionRouteGroupsResponse
/** 
 * The response message for TransitionRouteGroups.ListTransitionRouteGroups.
**/
export class GoogleCloudDialogflowCxV3ListTransitionRouteGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=transitionRouteGroups", elemType: GoogleCloudDialogflowCxV3TransitionRouteGroup })
  transitionRouteGroups?: GoogleCloudDialogflowCxV3TransitionRouteGroup[];
}
