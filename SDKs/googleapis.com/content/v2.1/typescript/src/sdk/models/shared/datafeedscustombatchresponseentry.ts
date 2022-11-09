import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Datafeed } from "./datafeed";
import { Errors } from "./errors";


// DatafeedsCustomBatchResponseEntry
/** 
 * A batch entry encoding a single non-batch datafeeds response.
**/
export class DatafeedsCustomBatchResponseEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchId" })
  batchId?: number;

  @Metadata({ data: "json, name=datafeed" })
  datafeed?: Datafeed;

  @Metadata({ data: "json, name=errors" })
  errors?: Errors;
}
