import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PosCustomBatchRequestEntry } from "./poscustombatchrequestentry";



export class PosCustomBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: PosCustomBatchRequestEntry })
  entries?: PosCustomBatchRequestEntry[];
}
