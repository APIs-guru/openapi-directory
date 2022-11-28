import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1TransitionRoute } from "./googleclouddialogflowcxv3beta1transitionroute";



// GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition
/** 
 * A transition coverage in a transition route group.
**/
export class GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=covered" })
  covered?: boolean;

  @SpeakeasyMetadata({ data: "json, name=transitionRoute" })
  transitionRoute?: GoogleCloudDialogflowCxV3beta1TransitionRoute;
}
