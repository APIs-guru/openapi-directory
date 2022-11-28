import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3TransitionRoute } from "./googleclouddialogflowcxv3transitionroute";



// GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverageTransition
/** 
 * A transition coverage in a transition route group.
**/
export class GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverageTransition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=covered" })
  covered?: boolean;

  @SpeakeasyMetadata({ data: "json, name=transitionRoute" })
  transitionRoute?: GoogleCloudDialogflowCxV3TransitionRoute;
}
