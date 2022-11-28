import { SpeakeasyBase } from "../../../internal/utils";
import { GuaranteedOrder } from "./guaranteedorder";
export declare class ListGuaranteedOrdersResponse extends SpeakeasyBase {
    guaranteedOrders?: GuaranteedOrder[];
    nextPageToken?: string;
}
