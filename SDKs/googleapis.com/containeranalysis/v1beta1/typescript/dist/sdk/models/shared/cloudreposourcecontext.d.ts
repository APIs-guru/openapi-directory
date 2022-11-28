import { SpeakeasyBase } from "../../../internal/utils";
import { AliasContext } from "./aliascontext";
import { RepoId } from "./repoid";
/**
 * A CloudRepoSourceContext denotes a particular revision in a Google Cloud Source Repo.
**/
export declare class CloudRepoSourceContext extends SpeakeasyBase {
    aliasContext?: AliasContext;
    repoId?: RepoId;
    revisionId?: string;
}
