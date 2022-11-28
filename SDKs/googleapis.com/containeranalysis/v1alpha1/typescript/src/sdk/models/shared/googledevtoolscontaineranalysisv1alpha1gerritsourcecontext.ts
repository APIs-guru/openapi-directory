import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleDevtoolsContaineranalysisV1alpha1AliasContext } from "./googledevtoolscontaineranalysisv1alpha1aliascontext";



// GoogleDevtoolsContaineranalysisV1alpha1GerritSourceContext
/** 
 * A SourceContext referring to a Gerrit project.
**/
export class GoogleDevtoolsContaineranalysisV1alpha1GerritSourceContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aliasContext" })
  aliasContext?: GoogleDevtoolsContaineranalysisV1alpha1AliasContext;

  @SpeakeasyMetadata({ data: "json, name=gerritProject" })
  gerritProject?: string;

  @SpeakeasyMetadata({ data: "json, name=hostUri" })
  hostUri?: string;

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId?: string;
}
