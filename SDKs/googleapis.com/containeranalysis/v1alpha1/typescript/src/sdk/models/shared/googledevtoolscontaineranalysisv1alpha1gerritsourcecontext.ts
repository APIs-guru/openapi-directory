import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleDevtoolsContaineranalysisV1alpha1AliasContext } from "./googledevtoolscontaineranalysisv1alpha1aliascontext";


// GoogleDevtoolsContaineranalysisV1alpha1GerritSourceContext
/** 
 * A SourceContext referring to a Gerrit project.
**/
export class GoogleDevtoolsContaineranalysisV1alpha1GerritSourceContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=aliasContext" })
  aliasContext?: GoogleDevtoolsContaineranalysisV1alpha1AliasContext;

  @Metadata({ data: "json, name=gerritProject" })
  gerritProject?: string;

  @Metadata({ data: "json, name=hostUri" })
  hostUri?: string;

  @Metadata({ data: "json, name=revisionId" })
  revisionId?: string;
}
