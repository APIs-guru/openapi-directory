import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatafeedsCustomBatchRequestEntry } from "./datafeedscustombatchrequestentry";



export class DatafeedsCustomBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: DatafeedsCustomBatchRequestEntry })
  entries?: DatafeedsCustomBatchRequestEntry[];
}
