import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupCoverageResult } from "./groupcoverageresult";



// PaginatedGroupCoverageResultMeta
/** 
 * Metadata associated with the response data
**/
export class PaginatedGroupCoverageResultMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset: number;

  @SpeakeasyMetadata({ data: "json, name=page_num" })
  pageNum: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords: number;
}


export class PaginatedGroupCoverageResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: PaginatedGroupCoverageResultMeta;

  @SpeakeasyMetadata({ data: "json, name=response", elemType: GroupCoverageResult })
  response: GroupCoverageResult[];
}
