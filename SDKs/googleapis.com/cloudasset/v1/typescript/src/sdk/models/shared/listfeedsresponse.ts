import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Feed } from "./feed";


export class ListFeedsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=feeds", elemType: shared.Feed })
  feeds?: Feed[];
}
