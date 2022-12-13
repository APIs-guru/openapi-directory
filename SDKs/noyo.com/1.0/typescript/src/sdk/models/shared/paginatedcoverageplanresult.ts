import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CoveragePlanResult } from "./coverageplanresult";



// PaginatedCoveragePlanResultMeta
/** 
 * Metadata associated with the response data
**/
export class PaginatedCoveragePlanResultMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset: number;

  @SpeakeasyMetadata({ data: "json, name=page_num" })
  pageNum: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords: number;
}


export class PaginatedCoveragePlanResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: PaginatedCoveragePlanResultMeta;

  @SpeakeasyMetadata({ data: "json, name=response", elemType: CoveragePlanResult })
  response: CoveragePlanResult[];
}
