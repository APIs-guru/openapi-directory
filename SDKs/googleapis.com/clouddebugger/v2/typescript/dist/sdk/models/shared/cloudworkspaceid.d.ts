import { SpeakeasyBase } from "../../../internal/utils";
import { RepoId } from "./repoid";
/**
 * A CloudWorkspaceId is a unique identifier for a cloud workspace. A cloud workspace is a place associated with a repo where modified files can be stored before they are committed.
**/
export declare class CloudWorkspaceId extends SpeakeasyBase {
    name?: string;
    repoId?: RepoId;
}
