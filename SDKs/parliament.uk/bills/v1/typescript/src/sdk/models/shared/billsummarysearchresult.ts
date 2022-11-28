import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BillSummary } from "./billsummary";



export class BillSummarySearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: BillSummary })
  items?: BillSummary[];

  @SpeakeasyMetadata({ data: "json, name=itemsPerPage" })
  itemsPerPage?: number;

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
