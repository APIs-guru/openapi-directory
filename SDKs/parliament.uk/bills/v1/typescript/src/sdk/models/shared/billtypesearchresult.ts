import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BillType } from "./billtype";



export class BillTypeSearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: BillType })
  items?: BillType[];

  @SpeakeasyMetadata({ data: "json, name=itemsPerPage" })
  itemsPerPage?: number;

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
