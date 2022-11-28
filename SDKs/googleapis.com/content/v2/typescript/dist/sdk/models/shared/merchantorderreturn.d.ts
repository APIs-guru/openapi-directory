import { SpeakeasyBase } from "../../../internal/utils";
import { MerchantOrderReturnItem } from "./merchantorderreturnitem";
import { ReturnShipment } from "./returnshipment";
/**
 * Order return. Production access (all methods) requires the order manager role. Sandbox access does not.
**/
export declare class MerchantOrderReturn extends SpeakeasyBase {
    creationDate?: string;
    merchantOrderId?: string;
    orderId?: string;
    orderReturnId?: string;
    returnItems?: MerchantOrderReturnItem[];
    returnShipments?: ReturnShipment[];
}
