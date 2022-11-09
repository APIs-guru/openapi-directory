import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AliasContext } from "./aliascontext";
import { RepoId } from "./repoid";


// CloudRepoSourceContext
/** 
 * A CloudRepoSourceContext denotes a particular revision in a cloud repo (a repo hosted by the Google Cloud Platform).
**/
export class CloudRepoSourceContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=aliasContext" })
  aliasContext?: AliasContext;

  @Metadata({ data: "json, name=aliasName" })
  aliasName?: string;

  @Metadata({ data: "json, name=repoId" })
  repoId?: RepoId;

  @Metadata({ data: "json, name=revisionId" })
  revisionId?: string;
}
