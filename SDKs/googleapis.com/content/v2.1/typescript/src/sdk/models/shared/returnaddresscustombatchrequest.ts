import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReturnaddressCustomBatchRequestEntry } from "./returnaddresscustombatchrequestentry";



export class ReturnaddressCustomBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: ReturnaddressCustomBatchRequestEntry })
  entries?: ReturnaddressCustomBatchRequestEntry[];
}
