import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocationResult } from "./locationresult";



// PaginatedLocationResultMeta
/** 
 * Metadata associated with the response data
**/
export class PaginatedLocationResultMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset: number;

  @SpeakeasyMetadata({ data: "json, name=page_num" })
  pageNum: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords: number;
}


export class PaginatedLocationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: PaginatedLocationResultMeta;

  @SpeakeasyMetadata({ data: "json, name=response", elemType: LocationResult })
  response: LocationResult[];
}
