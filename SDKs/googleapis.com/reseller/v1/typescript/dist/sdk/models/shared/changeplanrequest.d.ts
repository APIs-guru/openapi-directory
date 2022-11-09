import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Seats } from "./seats";
/**
 * JSON template for the ChangePlan rpc request.
**/
export declare class ChangePlanRequest extends SpeakeasyBase {
    dealCode?: string;
    kind?: string;
    planName?: string;
    purchaseOrderId?: string;
    seats?: Seats;
}
