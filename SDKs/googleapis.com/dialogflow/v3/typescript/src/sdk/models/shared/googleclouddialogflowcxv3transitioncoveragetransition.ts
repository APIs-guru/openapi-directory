import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3EventHandler } from "./googleclouddialogflowcxv3eventhandler";
import { GoogleCloudDialogflowCxV3TransitionCoverageTransitionNode } from "./googleclouddialogflowcxv3transitioncoveragetransitionnode";
import { GoogleCloudDialogflowCxV3TransitionRoute } from "./googleclouddialogflowcxv3transitionroute";



// GoogleCloudDialogflowCxV3TransitionCoverageTransition
/** 
 * A transition in a page.
**/
export class GoogleCloudDialogflowCxV3TransitionCoverageTransition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=covered" })
  covered?: boolean;

  @SpeakeasyMetadata({ data: "json, name=eventHandler" })
  eventHandler?: GoogleCloudDialogflowCxV3EventHandler;

  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: GoogleCloudDialogflowCxV3TransitionCoverageTransitionNode;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: GoogleCloudDialogflowCxV3TransitionCoverageTransitionNode;

  @SpeakeasyMetadata({ data: "json, name=transitionRoute" })
  transitionRoute?: GoogleCloudDialogflowCxV3TransitionRoute;
}
