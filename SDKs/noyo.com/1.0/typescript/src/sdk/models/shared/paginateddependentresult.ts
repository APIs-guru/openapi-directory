import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DependentResult } from "./dependentresult";



// PaginatedDependentResultMeta
/** 
 * Metadata associated with the response data
**/
export class PaginatedDependentResultMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset: number;

  @SpeakeasyMetadata({ data: "json, name=page_num" })
  pageNum: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords: number;
}


export class PaginatedDependentResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: PaginatedDependentResultMeta;

  @SpeakeasyMetadata({ data: "json, name=response", elemType: DependentResult })
  response: DependentResult[];
}
