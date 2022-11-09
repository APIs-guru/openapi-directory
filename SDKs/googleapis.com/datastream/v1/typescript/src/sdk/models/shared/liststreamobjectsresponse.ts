import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StreamObject } from "./streamobject";


// ListStreamObjectsResponse
/** 
 * Response containing the objects for a stream.
**/
export class ListStreamObjectsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=streamObjects", elemType: shared.StreamObject })
  streamObjects?: StreamObject[];
}
