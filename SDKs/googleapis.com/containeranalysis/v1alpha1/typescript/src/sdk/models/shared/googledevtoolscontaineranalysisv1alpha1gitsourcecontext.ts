import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleDevtoolsContaineranalysisV1alpha1GitSourceContext
/** 
 * A GitSourceContext denotes a particular revision in a third party Git repository (e.g., GitHub).
**/
export class GoogleDevtoolsContaineranalysisV1alpha1GitSourceContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
