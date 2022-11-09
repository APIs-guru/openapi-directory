import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DatafeedstatusesCustomBatchResponseEntry } from "./datafeedstatusescustombatchresponseentry";


export class DatafeedstatusesCustomBatchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.DatafeedstatusesCustomBatchResponseEntry })
  entries?: DatafeedstatusesCustomBatchResponseEntry[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
