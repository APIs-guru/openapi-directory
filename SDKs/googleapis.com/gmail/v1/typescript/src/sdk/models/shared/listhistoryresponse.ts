import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { History } from "./history";


export class ListHistoryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=history", elemType: shared.History })
  history?: History[];

  @Metadata({ data: "json, name=historyId" })
  historyId?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
