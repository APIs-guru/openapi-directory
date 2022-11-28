import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Datafeed } from "./datafeed";
import { Errors } from "./errors";



// DatafeedsCustomBatchResponseEntry
/** 
 * A batch entry encoding a single non-batch datafeeds response.
**/
export class DatafeedsCustomBatchResponseEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchId" })
  batchId?: number;

  @SpeakeasyMetadata({ data: "json, name=datafeed" })
  datafeed?: Datafeed;

  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: Errors;
}
