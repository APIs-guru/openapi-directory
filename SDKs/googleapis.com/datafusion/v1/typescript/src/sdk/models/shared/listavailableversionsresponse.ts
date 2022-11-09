import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Version } from "./version";


// ListAvailableVersionsResponse
/** 
 * Response message for the list available versions request.
**/
export class ListAvailableVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=availableVersions", elemType: shared.Version })
  availableVersions?: Version[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
