import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatafeedsCustomBatchResponseEntry } from "./datafeedscustombatchresponseentry";



export class DatafeedsCustomBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries", elemType: DatafeedsCustomBatchResponseEntry })
  entries?: DatafeedsCustomBatchResponseEntry[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
