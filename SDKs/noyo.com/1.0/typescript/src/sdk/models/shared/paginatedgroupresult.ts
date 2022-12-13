import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupResult } from "./groupresult";



// PaginatedGroupResultMeta
/** 
 * Metadata associated with the response data
**/
export class PaginatedGroupResultMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset: number;

  @SpeakeasyMetadata({ data: "json, name=page_num" })
  pageNum: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords: number;
}


export class PaginatedGroupResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: PaginatedGroupResultMeta;

  @SpeakeasyMetadata({ data: "json, name=response", elemType: GroupResult })
  response: GroupResult[];
}
