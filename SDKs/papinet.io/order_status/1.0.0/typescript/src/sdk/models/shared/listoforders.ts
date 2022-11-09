import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PaginationLinks } from "./paginationlinks";
import { OrderHeader } from "./orderheader";


export class ListOfOrders extends SpeakeasyBase {
  @Metadata({ data: "json, name=links" })
  links?: PaginationLinks;

  @Metadata({ data: "json, name=orders", elemType: shared.OrderHeader })
  orders?: OrderHeader[];
}
