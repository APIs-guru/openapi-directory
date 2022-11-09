import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OrderMerchantProvidedAnnotation } from "./ordermerchantprovidedannotation";


export class OrdersSetLineItemMetadataRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotations", elemType: shared.OrderMerchantProvidedAnnotation })
  annotations?: OrderMerchantProvidedAnnotation[];

  @Metadata({ data: "json, name=lineItemId" })
  lineItemId?: string;

  @Metadata({ data: "json, name=operationId" })
  operationId?: string;

  @Metadata({ data: "json, name=productId" })
  productId?: string;
}
