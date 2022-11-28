import { SpeakeasyBase } from "../../../internal/utils";
import { PaginationLinks } from "./paginationlinks";
import { OrderHeader } from "./orderheader";
export declare class ListOfOrders extends SpeakeasyBase {
    links?: PaginationLinks;
    orders?: OrderHeader[];
}
