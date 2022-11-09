import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DatafeedsCustomBatchRequestEntry } from "./datafeedscustombatchrequestentry";


export class DatafeedsCustomBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.DatafeedsCustomBatchRequestEntry })
  entries?: DatafeedsCustomBatchRequestEntry[];
}
