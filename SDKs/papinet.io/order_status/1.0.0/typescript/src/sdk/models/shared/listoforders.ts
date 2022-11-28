import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PaginationLinks } from "./paginationlinks";
import { OrderHeader } from "./orderheader";



export class ListOfOrders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: PaginationLinks;

  @SpeakeasyMetadata({ data: "json, name=orders", elemType: OrderHeader })
  orders?: OrderHeader[];
}
