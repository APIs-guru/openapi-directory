import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Repo } from "./repo";


// ListReposResponse
/** 
 * Response for ListRepos. The size is not set in the returned repositories.
**/
export class ListReposResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=repos", elemType: shared.Repo })
  repos?: Repo[];
}
