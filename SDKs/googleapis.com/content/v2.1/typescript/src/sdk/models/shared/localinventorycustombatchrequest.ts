import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocalinventoryCustomBatchRequestEntry } from "./localinventorycustombatchrequestentry";



export class LocalinventoryCustomBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: LocalinventoryCustomBatchRequestEntry })
  entries?: LocalinventoryCustomBatchRequestEntry[];
}
