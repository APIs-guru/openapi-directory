import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SmimeInfo } from "./smimeinfo";


export class ListSmimeInfoResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=smimeInfo", elemType: shared.SmimeInfo })
  smimeInfo?: SmimeInfo[];
}
