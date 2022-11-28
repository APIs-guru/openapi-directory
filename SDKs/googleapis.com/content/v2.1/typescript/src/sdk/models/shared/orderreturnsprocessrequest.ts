import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderreturnsRefundOperation } from "./orderreturnsrefundoperation";
import { OrderreturnsReturnItem } from "./orderreturnsreturnitem";



export class OrderreturnsProcessRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fullChargeReturnShippingCost" })
  fullChargeReturnShippingCost?: boolean;

  @SpeakeasyMetadata({ data: "json, name=operationId" })
  operationId?: string;

  @SpeakeasyMetadata({ data: "json, name=refundShippingFee" })
  refundShippingFee?: OrderreturnsRefundOperation;

  @SpeakeasyMetadata({ data: "json, name=returnItems", elemType: OrderreturnsReturnItem })
  returnItems?: OrderreturnsReturnItem[];
}
