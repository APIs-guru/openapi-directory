import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupApplicationResult } from "./groupapplicationresult";



// PaginatedGroupApplicationResultMeta
/** 
 * Metadata associated with the response data
**/
export class PaginatedGroupApplicationResultMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset: number;

  @SpeakeasyMetadata({ data: "json, name=page_num" })
  pageNum: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords: number;
}


export class PaginatedGroupApplicationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: PaginatedGroupApplicationResultMeta;

  @SpeakeasyMetadata({ data: "json, name=response", elemType: GroupApplicationResult })
  response: GroupApplicationResult[];
}
