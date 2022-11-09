import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OrderreturnsRefundOperation } from "./orderreturnsrefundoperation";
import { OrderreturnsReturnItem } from "./orderreturnsreturnitem";


export class OrderreturnsProcessRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fullChargeReturnShippingCost" })
  fullChargeReturnShippingCost?: boolean;

  @Metadata({ data: "json, name=operationId" })
  operationId?: string;

  @Metadata({ data: "json, name=refundShippingFee" })
  refundShippingFee?: OrderreturnsRefundOperation;

  @Metadata({ data: "json, name=returnItems", elemType: shared.OrderreturnsReturnItem })
  returnItems?: OrderreturnsReturnItem[];
}
