import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Flow } from "./googleclouddialogflowcxv3flow";
import { GoogleCloudDialogflowCxV3Page } from "./googleclouddialogflowcxv3page";



// GoogleCloudDialogflowCxV3TransitionCoverageTransitionNode
/** 
 * The source or target of a transition.
**/
export class GoogleCloudDialogflowCxV3TransitionCoverageTransitionNode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=flow" })
  flow?: GoogleCloudDialogflowCxV3Flow;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: GoogleCloudDialogflowCxV3Page;
}
