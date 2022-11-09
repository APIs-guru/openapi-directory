import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3TransitionRoute } from "./googleclouddialogflowcxv3transitionroute";


// GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverageTransition
/** 
 * A transition coverage in a transition route group.
**/
export class GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverageTransition extends SpeakeasyBase {
  @Metadata({ data: "json, name=covered" })
  covered?: boolean;

  @Metadata({ data: "json, name=transitionRoute" })
  transitionRoute?: GoogleCloudDialogflowCxV3TransitionRoute;
}
