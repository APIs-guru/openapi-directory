import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Version } from "./version";



// ListAvailableVersionsResponse
/** 
 * Response message for the list available versions request.
**/
export class ListAvailableVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availableVersions", elemType: Version })
  availableVersions?: Version[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
