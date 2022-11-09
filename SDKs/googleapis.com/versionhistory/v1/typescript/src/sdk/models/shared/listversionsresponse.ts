import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Version } from "./version";


// ListVersionsResponse
/** 
 * Response message for ListVersions.
**/
export class ListVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=versions", elemType: shared.Version })
  versions?: Version[];
}
