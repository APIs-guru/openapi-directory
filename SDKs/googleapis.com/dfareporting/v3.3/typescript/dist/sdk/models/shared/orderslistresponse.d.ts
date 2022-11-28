import { SpeakeasyBase } from "../../../internal/utils";
import { Order } from "./order";
/**
 * Order List Response
**/
export declare class OrdersListResponse extends SpeakeasyBase {
    kind?: string;
    nextPageToken?: string;
    orders?: Order[];
}
