import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { History } from "./history";



export class ListHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=history", elemType: History })
  history?: History[];

  @SpeakeasyMetadata({ data: "json, name=historyId" })
  historyId?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
