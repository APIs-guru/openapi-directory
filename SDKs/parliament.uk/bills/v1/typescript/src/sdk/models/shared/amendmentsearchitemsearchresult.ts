import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AmendmentSearchItem } from "./amendmentsearchitem";



export class AmendmentSearchItemSearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: AmendmentSearchItem })
  items?: AmendmentSearchItem[];

  @SpeakeasyMetadata({ data: "json, name=itemsPerPage" })
  itemsPerPage?: number;

  @SpeakeasyMetadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
