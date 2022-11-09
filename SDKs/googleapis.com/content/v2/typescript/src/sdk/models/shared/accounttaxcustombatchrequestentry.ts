import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountTax } from "./accounttax";


// AccounttaxCustomBatchRequestEntry
/** 
 * A batch entry encoding a single non-batch accounttax request.
**/
export class AccounttaxCustomBatchRequestEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=accountTax" })
  accountTax?: AccountTax;

  @Metadata({ data: "json, name=batchId" })
  batchId?: number;

  @Metadata({ data: "json, name=merchantId" })
  merchantId?: string;

  @Metadata({ data: "json, name=method" })
  method?: string;
}
