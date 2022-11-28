import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderMerchantProvidedAnnotation } from "./ordermerchantprovidedannotation";



export class OrdersCustomBatchRequestEntrySetLineItemMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotations", elemType: OrderMerchantProvidedAnnotation })
  annotations?: OrderMerchantProvidedAnnotation[];

  @SpeakeasyMetadata({ data: "json, name=lineItemId" })
  lineItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;
}
