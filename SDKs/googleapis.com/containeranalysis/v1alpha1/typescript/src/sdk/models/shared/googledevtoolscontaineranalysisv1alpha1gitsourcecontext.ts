import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleDevtoolsContaineranalysisV1alpha1GitSourceContext
/** 
 * A GitSourceContext denotes a particular revision in a third party Git repository (e.g., GitHub).
**/
export class GoogleDevtoolsContaineranalysisV1alpha1GitSourceContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
