import { SpeakeasyBase } from "../../../internal/utils";
import { Errors } from "./errors";
import { Order } from "./order";
export declare class OrdersCustomBatchResponseEntry extends SpeakeasyBase {
    batchId?: number;
    errors?: Errors;
    executionStatus?: string;
    kind?: string;
    order?: Order;
}
