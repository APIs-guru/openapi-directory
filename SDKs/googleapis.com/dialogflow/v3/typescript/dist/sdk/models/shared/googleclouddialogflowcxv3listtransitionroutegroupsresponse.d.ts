import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3TransitionRouteGroup } from "./googleclouddialogflowcxv3transitionroutegroup";
/**
 * The response message for TransitionRouteGroups.ListTransitionRouteGroups.
**/
export declare class GoogleCloudDialogflowCxV3ListTransitionRouteGroupsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    transitionRouteGroups?: GoogleCloudDialogflowCxV3TransitionRouteGroup[];
}
