import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Version } from "./version";


// ListVersionsResponse
/** 
 * Response with the list of the versions for the specified script project.
**/
export class ListVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=versions", elemType: shared.Version })
  versions?: Version[];
}
