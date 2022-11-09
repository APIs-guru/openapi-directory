import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3EventHandler } from "./googleclouddialogflowcxv3eventhandler";
import { GoogleCloudDialogflowCxV3TransitionCoverageTransitionNode } from "./googleclouddialogflowcxv3transitioncoveragetransitionnode";
import { GoogleCloudDialogflowCxV3TransitionCoverageTransitionNode } from "./googleclouddialogflowcxv3transitioncoveragetransitionnode";
import { GoogleCloudDialogflowCxV3TransitionRoute } from "./googleclouddialogflowcxv3transitionroute";


// GoogleCloudDialogflowCxV3TransitionCoverageTransition
/** 
 * A transition in a page.
**/
export class GoogleCloudDialogflowCxV3TransitionCoverageTransition extends SpeakeasyBase {
  @Metadata({ data: "json, name=covered" })
  covered?: boolean;

  @Metadata({ data: "json, name=eventHandler" })
  eventHandler?: GoogleCloudDialogflowCxV3EventHandler;

  @Metadata({ data: "json, name=index" })
  index?: number;

  @Metadata({ data: "json, name=source" })
  source?: GoogleCloudDialogflowCxV3TransitionCoverageTransitionNode;

  @Metadata({ data: "json, name=target" })
  target?: GoogleCloudDialogflowCxV3TransitionCoverageTransitionNode;

  @Metadata({ data: "json, name=transitionRoute" })
  transitionRoute?: GoogleCloudDialogflowCxV3TransitionRoute;
}
