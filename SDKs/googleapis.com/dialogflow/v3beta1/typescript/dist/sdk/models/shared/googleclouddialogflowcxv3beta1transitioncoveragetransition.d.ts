import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1EventHandler } from "./googleclouddialogflowcxv3beta1eventhandler";
import { GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode } from "./googleclouddialogflowcxv3beta1transitioncoveragetransitionnode";
import { GoogleCloudDialogflowCxV3beta1TransitionRoute } from "./googleclouddialogflowcxv3beta1transitionroute";
/**
 * A transition in a page.
**/
export declare class GoogleCloudDialogflowCxV3beta1TransitionCoverageTransition extends SpeakeasyBase {
    covered?: boolean;
    eventHandler?: GoogleCloudDialogflowCxV3beta1EventHandler;
    index?: number;
    source?: GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode;
    target?: GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode;
    transitionRoute?: GoogleCloudDialogflowCxV3beta1TransitionRoute;
}
