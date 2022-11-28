import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Repo } from "./repo";



// ListReposResponse
/** 
 * Response for ListRepos. The size is not set in the returned repositories.
**/
export class ListReposResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=repos", elemType: Repo })
  repos?: Repo[];
}
