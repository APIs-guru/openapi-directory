import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LiasettingsCustomBatchRequestEntry } from "./liasettingscustombatchrequestentry";


export class LiasettingsCustomBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.LiasettingsCustomBatchRequestEntry })
  entries?: LiasettingsCustomBatchRequestEntry[];
}
