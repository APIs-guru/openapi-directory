import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AmendmentSearchItem } from "./amendmentsearchitem";


export class AmendmentSearchItemSearchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.AmendmentSearchItem })
  items?: AmendmentSearchItem[];

  @Metadata({ data: "json, name=itemsPerPage" })
  itemsPerPage?: number;

  @Metadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
