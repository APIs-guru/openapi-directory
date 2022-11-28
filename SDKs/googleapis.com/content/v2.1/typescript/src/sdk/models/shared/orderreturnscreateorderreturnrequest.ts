import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderreturnsLineItem } from "./orderreturnslineitem";



export class OrderreturnsCreateOrderReturnRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lineItems", elemType: OrderreturnsLineItem })
  lineItems?: OrderreturnsLineItem[];

  @SpeakeasyMetadata({ data: "json, name=operationId" })
  operationId?: string;

  @SpeakeasyMetadata({ data: "json, name=orderId" })
  orderId?: string;

  @SpeakeasyMetadata({ data: "json, name=returnMethodType" })
  returnMethodType?: string;
}
