import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BankAccountResult } from "./bankaccountresult";



// BankAccountPaginatedResultMeta
/** 
 * Metadata associated with the response data
**/
export class BankAccountPaginatedResultMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset: number;

  @SpeakeasyMetadata({ data: "json, name=page_num" })
  pageNum: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords: number;
}


export class BankAccountPaginatedResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: BankAccountPaginatedResultMeta;

  @SpeakeasyMetadata({ data: "json, name=response", elemType: BankAccountResult })
  response: BankAccountResult[];
}
