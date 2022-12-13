import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EmployeeResult } from "./employeeresult";



// PaginatedEmployeeResultMeta
/** 
 * Metadata associated with the response data
**/
export class PaginatedEmployeeResultMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset: number;

  @SpeakeasyMetadata({ data: "json, name=page_num" })
  pageNum: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords: number;
}


export class PaginatedEmployeeResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: PaginatedEmployeeResultMeta;

  @SpeakeasyMetadata({ data: "json, name=response", elemType: EmployeeResult })
  response: EmployeeResult[];
}
