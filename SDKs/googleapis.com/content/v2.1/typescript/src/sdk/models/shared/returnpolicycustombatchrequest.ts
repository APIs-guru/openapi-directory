import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReturnpolicyCustomBatchRequestEntry } from "./returnpolicycustombatchrequestentry";



export class ReturnpolicyCustomBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: ReturnpolicyCustomBatchRequestEntry })
  entries?: ReturnpolicyCustomBatchRequestEntry[];
}
