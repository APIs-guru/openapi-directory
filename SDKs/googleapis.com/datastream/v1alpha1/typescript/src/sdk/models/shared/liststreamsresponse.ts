import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Stream } from "./stream";



export class ListStreamsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=streams", elemType: Stream })
  streams?: Stream[];

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
