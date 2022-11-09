import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowCxV3beta1Flow } from "./googleclouddialogflowcxv3beta1flow";
import { GoogleCloudDialogflowCxV3beta1Page } from "./googleclouddialogflowcxv3beta1page";


// GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode
/** 
 * The source or target of a transition.
**/
export class GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode extends SpeakeasyBase {
  @Metadata({ data: "json, name=flow" })
  flow?: GoogleCloudDialogflowCxV3beta1Flow;

  @Metadata({ data: "json, name=page" })
  page?: GoogleCloudDialogflowCxV3beta1Page;
}
