import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AliasContext } from "./aliascontext";


// GerritSourceContext
/** 
 * A SourceContext referring to a Gerrit project.
**/
export class GerritSourceContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=aliasContext" })
  aliasContext?: AliasContext;

  @Metadata({ data: "json, name=gerritProject" })
  gerritProject?: string;

  @Metadata({ data: "json, name=hostUri" })
  hostUri?: string;

  @Metadata({ data: "json, name=revisionId" })
  revisionId?: string;
}
