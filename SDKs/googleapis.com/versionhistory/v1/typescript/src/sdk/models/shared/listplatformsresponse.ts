import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Platform } from "./platform";



// ListPlatformsResponse
/** 
 * Response message for ListPlatforms.
**/
export class ListPlatformsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=platforms", elemType: Platform })
  platforms?: Platform[];
}
