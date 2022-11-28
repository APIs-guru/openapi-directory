import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProductstatusesCustomBatchRequestEntry
/** 
 * A batch entry encoding a single non-batch productstatuses request.
**/
export class ProductstatusesCustomBatchRequestEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchId" })
  batchId?: number;

  @SpeakeasyMetadata({ data: "json, name=destinations" })
  destinations?: string[];

  @SpeakeasyMetadata({ data: "json, name=includeAttributes" })
  includeAttributes?: boolean;

  @SpeakeasyMetadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;
}
