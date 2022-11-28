import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DatafeedstatusesCustomBatchRequestEntry
/** 
 * A batch entry encoding a single non-batch datafeedstatuses request.
**/
export class DatafeedstatusesCustomBatchRequestEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchId" })
  batchId?: number;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=datafeedId" })
  datafeedId?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;
}
