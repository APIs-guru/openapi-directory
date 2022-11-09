import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3beta1TransitionRoute } from "./googleclouddialogflowcxv3beta1transitionroute";


// GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition
/** 
 * A transition coverage in a transition route group.
**/
export class GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition extends SpeakeasyBase {
  @Metadata({ data: "json, name=covered" })
  covered?: boolean;

  @Metadata({ data: "json, name=transitionRoute" })
  transitionRoute?: GoogleCloudDialogflowCxV3beta1TransitionRoute;
}
