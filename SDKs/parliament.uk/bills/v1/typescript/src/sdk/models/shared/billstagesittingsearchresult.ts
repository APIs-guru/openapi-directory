import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BillStageSitting } from "./billstagesitting";


export class BillStageSittingSearchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.BillStageSitting })
  items?: BillStageSitting[];

  @Metadata({ data: "json, name=itemsPerPage" })
  itemsPerPage?: number;

  @Metadata({ data: "json, name=totalResults" })
  totalResults?: number;
}
