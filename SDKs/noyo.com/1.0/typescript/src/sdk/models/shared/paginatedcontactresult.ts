import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactResult } from "./contactresult";



// PaginatedContactResultMeta
/** 
 * Metadata associated with the response data
**/
export class PaginatedContactResultMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset: number;

  @SpeakeasyMetadata({ data: "json, name=page_num" })
  pageNum: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords: number;
}


export class PaginatedContactResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: PaginatedContactResultMeta;

  @SpeakeasyMetadata({ data: "json, name=response", elemType: ContactResult })
  response: ContactResult[];
}
