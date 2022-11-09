import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PaginationData
/** 
 * Page containing results.
**/
export class PaginationData extends SpeakeasyBase {
  @Metadata({ data: "json, name=number" })
  number?: number;

  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=totalElements" })
  totalElements?: number;

  @Metadata({ data: "json, name=totalPages" })
  totalPages?: number;
}
