import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Thread } from "./thread";


export class ListThreadsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=resultSizeEstimate" })
  resultSizeEstimate?: number;

  @Metadata({ data: "json, name=threads", elemType: shared.Thread })
  threads?: Thread[];
}
