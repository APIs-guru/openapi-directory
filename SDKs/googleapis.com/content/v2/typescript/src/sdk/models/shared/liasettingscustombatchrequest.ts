import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LiasettingsCustomBatchRequestEntry } from "./liasettingscustombatchrequestentry";



export class LiasettingsCustomBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: LiasettingsCustomBatchRequestEntry })
  entries?: LiasettingsCustomBatchRequestEntry[];
}
