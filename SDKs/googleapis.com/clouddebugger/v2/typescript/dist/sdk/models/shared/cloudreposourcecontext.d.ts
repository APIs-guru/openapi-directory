import { SpeakeasyBase } from "../../../internal/utils";
import { AliasContext } from "./aliascontext";
import { RepoId } from "./repoid";
/**
 * A CloudRepoSourceContext denotes a particular revision in a cloud repo (a repo hosted by the Google Cloud Platform).
**/
export declare class CloudRepoSourceContext extends SpeakeasyBase {
    aliasContext?: AliasContext;
    aliasName?: string;
    repoId?: RepoId;
    revisionId?: string;
}
