import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1TransitionRouteGroup } from "./googleclouddialogflowcxv3beta1transitionroutegroup";
/**
 * The response message for TransitionRouteGroups.ListTransitionRouteGroups.
**/
export declare class GoogleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    transitionRouteGroups?: GoogleCloudDialogflowCxV3beta1TransitionRouteGroup[];
}
