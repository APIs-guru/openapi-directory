import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1TransitionRoute } from "./googleclouddialogflowcxv3beta1transitionroute";
import { GoogleCloudDialogflowCxV3beta1TransitionRouteInput } from "./googleclouddialogflowcxv3beta1transitionroute";
/**
 * An TransitionRouteGroup represents a group of `TransitionRoutes` to be used by a Page.
**/
export declare class GoogleCloudDialogflowCxV3beta1TransitionRouteGroup extends SpeakeasyBase {
    displayName?: string;
    name?: string;
    transitionRoutes?: GoogleCloudDialogflowCxV3beta1TransitionRoute[];
}
/**
 * An TransitionRouteGroup represents a group of `TransitionRoutes` to be used by a Page.
**/
export declare class GoogleCloudDialogflowCxV3beta1TransitionRouteGroupInput extends SpeakeasyBase {
    displayName?: string;
    name?: string;
    transitionRoutes?: GoogleCloudDialogflowCxV3beta1TransitionRouteInput[];
}
