import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SmimeInfo } from "./smimeinfo";



export class ListSmimeInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=smimeInfo", elemType: SmimeInfo })
  smimeInfo?: SmimeInfo[];
}
