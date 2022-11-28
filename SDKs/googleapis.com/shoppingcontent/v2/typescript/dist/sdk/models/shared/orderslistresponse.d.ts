import { SpeakeasyBase } from "../../../internal/utils";
import { Order } from "./order";
export declare class OrdersListResponse extends SpeakeasyBase {
    kind?: string;
    nextPageToken?: string;
    resources?: Order[];
}
