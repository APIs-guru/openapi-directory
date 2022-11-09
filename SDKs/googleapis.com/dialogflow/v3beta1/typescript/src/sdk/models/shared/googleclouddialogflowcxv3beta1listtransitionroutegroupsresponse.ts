import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3beta1TransitionRouteGroup } from "./googleclouddialogflowcxv3beta1transitionroutegroup";


// GoogleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponse
/** 
 * The response message for TransitionRouteGroups.ListTransitionRouteGroups.
**/
export class GoogleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=transitionRouteGroups", elemType: shared.GoogleCloudDialogflowCxV3beta1TransitionRouteGroup })
  transitionRouteGroups?: GoogleCloudDialogflowCxV3beta1TransitionRouteGroup[];
}
