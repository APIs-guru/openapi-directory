import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BillType } from "./billtype";


export class BillTypeSearchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.BillType })
  items?: BillType[];

  @Metadata({ data: "json, name=itemsPerPage" })
  itemsPerPage?: number;

  @Metadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
