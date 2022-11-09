import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AliasContext } from "./aliascontext";
import { RepoId } from "./repoid";


// CloudRepoSourceContext
/** 
 * A CloudRepoSourceContext denotes a particular revision in a Google Cloud Source Repo.
**/
export class CloudRepoSourceContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=aliasContext" })
  aliasContext?: AliasContext;

  @Metadata({ data: "json, name=repoId" })
  repoId?: RepoId;

  @Metadata({ data: "json, name=revisionId" })
  revisionId?: string;
}
