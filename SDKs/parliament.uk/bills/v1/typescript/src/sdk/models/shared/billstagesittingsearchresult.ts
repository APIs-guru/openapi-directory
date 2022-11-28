import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BillStageSitting } from "./billstagesitting";



export class BillStageSittingSearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: BillStageSitting })
  items?: BillStageSitting[];

  @SpeakeasyMetadata({ data: "json, name=itemsPerPage" })
  itemsPerPage?: number;

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
