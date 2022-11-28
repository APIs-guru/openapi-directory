import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatafeedstatusesCustomBatchResponseEntry } from "./datafeedstatusescustombatchresponseentry";



export class DatafeedstatusesCustomBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: DatafeedstatusesCustomBatchResponseEntry })
  entries?: DatafeedstatusesCustomBatchResponseEntry[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
