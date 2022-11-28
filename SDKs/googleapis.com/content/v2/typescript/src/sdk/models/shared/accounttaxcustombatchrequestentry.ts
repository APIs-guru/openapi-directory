import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountTax } from "./accounttax";



// AccounttaxCustomBatchRequestEntry
/** 
 * A batch entry encoding a single non-batch accounttax request.
**/
export class AccounttaxCustomBatchRequestEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=accountTax" })
  accountTax?: AccountTax;

  @SpeakeasyMetadata({ data: "json, name=batchId" })
  batchId?: number;

  @SpeakeasyMetadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;
}
