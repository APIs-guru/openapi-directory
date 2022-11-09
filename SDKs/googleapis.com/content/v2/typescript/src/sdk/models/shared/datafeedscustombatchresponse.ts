import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DatafeedsCustomBatchResponseEntry } from "./datafeedscustombatchresponseentry";


export class DatafeedsCustomBatchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries", elemType: shared.DatafeedsCustomBatchResponseEntry })
  entries?: DatafeedsCustomBatchResponseEntry[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
