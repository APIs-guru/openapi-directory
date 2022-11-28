import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamObject } from "./streamobject";



// ListStreamObjectsResponse
/** 
 * Response containing the objects for a stream.
**/
export class ListStreamObjectsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=streamObjects", elemType: StreamObject })
  streamObjects?: StreamObject[];
}
