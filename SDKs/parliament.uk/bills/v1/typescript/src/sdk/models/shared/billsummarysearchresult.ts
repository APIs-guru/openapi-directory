import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BillSummary } from "./billsummary";


export class BillSummarySearchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.BillSummary })
  items?: BillSummary[];

  @Metadata({ data: "json, name=itemsPerPage" })
  itemsPerPage?: number;

  @Metadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
