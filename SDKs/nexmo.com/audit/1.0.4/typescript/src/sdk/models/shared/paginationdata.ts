import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PaginationData
/** 
 * Page containing results.
**/
export class PaginationData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: number;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=totalElements" })
  totalElements?: number;

  @SpeakeasyMetadata({ data: "json, name=totalPages" })
  totalPages?: number;
}
