import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DatafeedstatusesCustomBatchRequestEntry } from "./datafeedstatusescustombatchrequestentry";


export class DatafeedstatusesCustomBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.DatafeedstatusesCustomBatchRequestEntry })
  entries?: DatafeedstatusesCustomBatchRequestEntry[];
}
