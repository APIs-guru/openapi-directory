import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PosCustomBatchRequestEntry } from "./poscustombatchrequestentry";


export class PosCustomBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.PosCustomBatchRequestEntry })
  entries?: PosCustomBatchRequestEntry[];
}
