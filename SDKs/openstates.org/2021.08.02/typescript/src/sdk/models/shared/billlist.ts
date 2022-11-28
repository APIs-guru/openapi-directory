import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaginationMeta } from "./paginationmeta";
import { Bill } from "./bill";



export class BillList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pagination" })
  pagination: PaginationMeta;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: Bill })
  results: Bill[];
}
