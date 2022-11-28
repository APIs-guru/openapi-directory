import { SpeakeasyBase } from "../../../internal/utils";
import { OrderMerchantProvidedAnnotation } from "./ordermerchantprovidedannotation";
export declare class OrdersSetLineItemMetadataRequest extends SpeakeasyBase {
    annotations?: OrderMerchantProvidedAnnotation[];
    lineItemId?: string;
    operationId?: string;
    productId?: string;
}
