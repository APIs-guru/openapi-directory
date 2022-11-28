import { SpeakeasyBase } from "../../../internal/utils";
import { OrderMerchantProvidedAnnotation } from "./ordermerchantprovidedannotation";
export declare class OrdersCustomBatchRequestEntrySetLineItemMetadata extends SpeakeasyBase {
    annotations?: OrderMerchantProvidedAnnotation[];
    lineItemId?: string;
    productId?: string;
}
