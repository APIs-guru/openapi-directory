import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatafeedstatusesCustomBatchRequestEntry } from "./datafeedstatusescustombatchrequestentry";



export class DatafeedstatusesCustomBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: DatafeedstatusesCustomBatchRequestEntry })
  entries?: DatafeedstatusesCustomBatchRequestEntry[];
}
