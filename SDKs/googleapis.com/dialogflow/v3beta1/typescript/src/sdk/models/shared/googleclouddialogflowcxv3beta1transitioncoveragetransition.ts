import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3beta1EventHandler } from "./googleclouddialogflowcxv3beta1eventhandler";
import { GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode } from "./googleclouddialogflowcxv3beta1transitioncoveragetransitionnode";
import { GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode } from "./googleclouddialogflowcxv3beta1transitioncoveragetransitionnode";
import { GoogleCloudDialogflowCxV3beta1TransitionRoute } from "./googleclouddialogflowcxv3beta1transitionroute";


// GoogleCloudDialogflowCxV3beta1TransitionCoverageTransition
/** 
 * A transition in a page.
**/
export class GoogleCloudDialogflowCxV3beta1TransitionCoverageTransition extends SpeakeasyBase {
  @Metadata({ data: "json, name=covered" })
  covered?: boolean;

  @Metadata({ data: "json, name=eventHandler" })
  eventHandler?: GoogleCloudDialogflowCxV3beta1EventHandler;

  @Metadata({ data: "json, name=index" })
  index?: number;

  @Metadata({ data: "json, name=source" })
  source?: GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode;

  @Metadata({ data: "json, name=target" })
  target?: GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode;

  @Metadata({ data: "json, name=transitionRoute" })
  transitionRoute?: GoogleCloudDialogflowCxV3beta1TransitionRoute;
}
