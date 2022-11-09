import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Item } from "./item";


export class PollItemsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Item })
  items?: Item[];
}
