import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Stream } from "./stream";


// ListStreamsResponse
/** 
 * Response message for listing streams.
**/
export class ListStreamsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=streams", elemType: shared.Stream })
  streams?: Stream[];

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
