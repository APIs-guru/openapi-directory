import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AliasContext } from "./aliascontext";



// GerritSourceContext
/** 
 * A SourceContext referring to a Gerrit project.
**/
export class GerritSourceContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aliasContext" })
  aliasContext?: AliasContext;

  @SpeakeasyMetadata({ data: "json, name=aliasName" })
  aliasName?: string;

  @SpeakeasyMetadata({ data: "json, name=gerritProject" })
  gerritProject?: string;

  @SpeakeasyMetadata({ data: "json, name=hostUri" })
  hostUri?: string;

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId?: string;
}
