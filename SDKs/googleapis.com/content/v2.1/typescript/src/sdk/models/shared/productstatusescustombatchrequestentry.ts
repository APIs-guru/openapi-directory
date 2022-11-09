import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProductstatusesCustomBatchRequestEntry
/** 
 * A batch entry encoding a single non-batch productstatuses request.
**/
export class ProductstatusesCustomBatchRequestEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchId" })
  batchId?: number;

  @Metadata({ data: "json, name=destinations" })
  destinations?: string[];

  @Metadata({ data: "json, name=includeAttributes" })
  includeAttributes?: boolean;

  @Metadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @Metadata({ data: "json, name=method" })
  method?: string;

  @Metadata({ data: "json, name=productId" })
  productId?: string;
}
