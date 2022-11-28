import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3TransitionRoute } from "./googleclouddialogflowcxv3transitionroute";
import { GoogleCloudDialogflowCxV3TransitionRouteInput } from "./googleclouddialogflowcxv3transitionroute";
/**
 * An TransitionRouteGroup represents a group of `TransitionRoutes` to be used by a Page.
**/
export declare class GoogleCloudDialogflowCxV3TransitionRouteGroup extends SpeakeasyBase {
    displayName?: string;
    name?: string;
    transitionRoutes?: GoogleCloudDialogflowCxV3TransitionRoute[];
}
/**
 * An TransitionRouteGroup represents a group of `TransitionRoutes` to be used by a Page.
**/
export declare class GoogleCloudDialogflowCxV3TransitionRouteGroupInput extends SpeakeasyBase {
    displayName?: string;
    name?: string;
    transitionRoutes?: GoogleCloudDialogflowCxV3TransitionRouteInput[];
}
