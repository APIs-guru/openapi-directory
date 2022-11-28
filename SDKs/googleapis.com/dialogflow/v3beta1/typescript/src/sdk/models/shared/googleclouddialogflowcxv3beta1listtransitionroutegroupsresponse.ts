import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1TransitionRouteGroup } from "./googleclouddialogflowcxv3beta1transitionroutegroup";



// GoogleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponse
/** 
 * The response message for TransitionRouteGroups.ListTransitionRouteGroups.
**/
export class GoogleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=transitionRouteGroups", elemType: GoogleCloudDialogflowCxV3beta1TransitionRouteGroup })
  transitionRouteGroups?: GoogleCloudDialogflowCxV3beta1TransitionRouteGroup[];
}
