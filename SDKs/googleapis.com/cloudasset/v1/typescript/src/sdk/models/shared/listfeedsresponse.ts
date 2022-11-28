import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Feed } from "./feed";



export class ListFeedsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=feeds", elemType: Feed })
  feeds?: Feed[];
}
