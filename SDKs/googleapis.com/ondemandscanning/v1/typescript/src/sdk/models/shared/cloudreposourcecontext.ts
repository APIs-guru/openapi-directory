import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AliasContext } from "./aliascontext";
import { RepoId } from "./repoid";



// CloudRepoSourceContext
/** 
 * A CloudRepoSourceContext denotes a particular revision in a Google Cloud Source Repo.
**/
export class CloudRepoSourceContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aliasContext" })
  aliasContext?: AliasContext;

  @SpeakeasyMetadata({ data: "json, name=repoId" })
  repoId?: RepoId;

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId?: string;
}
