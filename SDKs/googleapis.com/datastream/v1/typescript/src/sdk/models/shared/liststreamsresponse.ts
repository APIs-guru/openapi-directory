import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Stream } from "./stream";



// ListStreamsResponse
/** 
 * Response message for listing streams.
**/
export class ListStreamsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=streams", elemType: Stream })
  streams?: Stream[];

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
