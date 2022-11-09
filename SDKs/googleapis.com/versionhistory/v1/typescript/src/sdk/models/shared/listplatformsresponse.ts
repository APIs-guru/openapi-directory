import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Platform } from "./platform";


// ListPlatformsResponse
/** 
 * Response message for ListPlatforms.
**/
export class ListPlatformsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=platforms", elemType: shared.Platform })
  platforms?: Platform[];
}
