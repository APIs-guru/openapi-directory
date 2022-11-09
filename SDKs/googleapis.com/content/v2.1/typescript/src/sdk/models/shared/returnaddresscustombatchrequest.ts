import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReturnaddressCustomBatchRequestEntry } from "./returnaddresscustombatchrequestentry";


export class ReturnaddressCustomBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.ReturnaddressCustomBatchRequestEntry })
  entries?: ReturnaddressCustomBatchRequestEntry[];
}
