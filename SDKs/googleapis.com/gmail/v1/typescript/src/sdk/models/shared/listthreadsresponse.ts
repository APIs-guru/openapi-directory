import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Thread } from "./thread";



export class ListThreadsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resultSizeEstimate" })
  resultSizeEstimate?: number;

  @SpeakeasyMetadata({ data: "json, name=threads", elemType: Thread })
  threads?: Thread[];
}
