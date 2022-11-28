import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccountstatusesCustomBatchRequestEntry
/** 
 * A batch entry encoding a single non-batch accountstatuses request.
**/
export class AccountstatusesCustomBatchRequestEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=batchId" })
  batchId?: number;

  @SpeakeasyMetadata({ data: "json, name=destinations" })
  destinations?: string[];

  @SpeakeasyMetadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;
}
