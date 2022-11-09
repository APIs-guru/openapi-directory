import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Repo } from "./repo";
/**
 * Response for ListRepos. The size is not set in the returned repositories.
**/
export declare class ListReposResponse extends SpeakeasyBase {
    nextPageToken?: string;
    repos?: Repo[];
}
