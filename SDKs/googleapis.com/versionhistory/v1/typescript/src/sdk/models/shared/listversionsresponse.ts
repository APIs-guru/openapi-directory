import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Version } from "./version";



// ListVersionsResponse
/** 
 * Response message for ListVersions.
**/
export class ListVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=versions", elemType: Version })
  versions?: Version[];
}
