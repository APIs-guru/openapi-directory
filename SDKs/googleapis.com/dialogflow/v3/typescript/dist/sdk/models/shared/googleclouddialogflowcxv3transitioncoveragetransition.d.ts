import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3EventHandler } from "./googleclouddialogflowcxv3eventhandler";
import { GoogleCloudDialogflowCxV3TransitionCoverageTransitionNode } from "./googleclouddialogflowcxv3transitioncoveragetransitionnode";
import { GoogleCloudDialogflowCxV3TransitionRoute } from "./googleclouddialogflowcxv3transitionroute";
/**
 * A transition in a page.
**/
export declare class GoogleCloudDialogflowCxV3TransitionCoverageTransition extends SpeakeasyBase {
    covered?: boolean;
    eventHandler?: GoogleCloudDialogflowCxV3EventHandler;
    index?: number;
    source?: GoogleCloudDialogflowCxV3TransitionCoverageTransitionNode;
    target?: GoogleCloudDialogflowCxV3TransitionCoverageTransitionNode;
    transitionRoute?: GoogleCloudDialogflowCxV3TransitionRoute;
}
