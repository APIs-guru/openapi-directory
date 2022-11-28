import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Region } from "./region";



// ListRegionsResponse
/** 
 * Response message for the `ListRegions` method.
**/
export class ListRegionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=regions", elemType: Region })
  regions?: Region[];
}
