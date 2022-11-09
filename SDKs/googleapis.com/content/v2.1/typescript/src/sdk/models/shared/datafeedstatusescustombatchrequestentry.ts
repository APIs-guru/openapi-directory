import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DatafeedstatusesCustomBatchRequestEntry
/** 
 * A batch entry encoding a single non-batch datafeedstatuses request.
**/
export class DatafeedstatusesCustomBatchRequestEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchId" })
  batchId?: number;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=datafeedId" })
  datafeedId?: string;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @Metadata({ data: "json, name=method" })
  method?: string;
}
