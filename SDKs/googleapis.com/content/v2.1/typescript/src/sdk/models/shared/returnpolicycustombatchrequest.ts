import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReturnpolicyCustomBatchRequestEntry } from "./returnpolicycustombatchrequestentry";


export class ReturnpolicyCustomBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.ReturnpolicyCustomBatchRequestEntry })
  entries?: ReturnpolicyCustomBatchRequestEntry[];
}
