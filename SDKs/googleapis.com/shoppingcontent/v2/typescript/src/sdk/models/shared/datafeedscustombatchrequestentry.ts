import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Datafeed } from "./datafeed";


// DatafeedsCustomBatchRequestEntry
/** 
 * A batch entry encoding a single non-batch datafeeds request.
**/
export class DatafeedsCustomBatchRequestEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchId" })
  batchId?: number;

  @Metadata({ data: "json, name=datafeed" })
  datafeed?: Datafeed;

  @Metadata({ data: "json, name=datafeedId" })
  datafeedId?: string;

  @Metadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @Metadata({ data: "json, name=method" })
  method?: string;
}
