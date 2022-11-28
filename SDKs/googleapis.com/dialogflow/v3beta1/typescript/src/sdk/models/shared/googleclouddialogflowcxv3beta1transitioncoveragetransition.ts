import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1EventHandler } from "./googleclouddialogflowcxv3beta1eventhandler";
import { GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode } from "./googleclouddialogflowcxv3beta1transitioncoveragetransitionnode";
import { GoogleCloudDialogflowCxV3beta1TransitionRoute } from "./googleclouddialogflowcxv3beta1transitionroute";



// GoogleCloudDialogflowCxV3beta1TransitionCoverageTransition
/** 
 * A transition in a page.
**/
export class GoogleCloudDialogflowCxV3beta1TransitionCoverageTransition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=covered" })
  covered?: boolean;

  @SpeakeasyMetadata({ data: "json, name=eventHandler" })
  eventHandler?: GoogleCloudDialogflowCxV3beta1EventHandler;

  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode;

  @SpeakeasyMetadata({ data: "json, name=transitionRoute" })
  transitionRoute?: GoogleCloudDialogflowCxV3beta1TransitionRoute;
}
