import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PaginationMeta } from "./paginationmeta";
import { Bill } from "./bill";


export class BillList extends SpeakeasyBase {
  @Metadata({ data: "json, name=pagination" })
  pagination: PaginationMeta;

  @Metadata({ data: "json, name=results", elemType: shared.Bill })
  results: Bill[];
}
