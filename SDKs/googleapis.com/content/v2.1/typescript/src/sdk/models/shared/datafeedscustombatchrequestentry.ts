import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Datafeed } from "./datafeed";



// DatafeedsCustomBatchRequestEntry
/** 
 * A batch entry encoding a single non-batch datafeeds request.
**/
export class DatafeedsCustomBatchRequestEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchId" })
  batchId?: number;

  @SpeakeasyMetadata({ data: "json, name=datafeed" })
  datafeed?: Datafeed;

  @SpeakeasyMetadata({ data: "json, name=datafeedId" })
  datafeedId?: string;

  @SpeakeasyMetadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;
}
