import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OrderreturnsLineItem } from "./orderreturnslineitem";


export class OrderreturnsCreateOrderReturnRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=lineItems", elemType: shared.OrderreturnsLineItem })
  lineItems?: OrderreturnsLineItem[];

  @Metadata({ data: "json, name=operationId" })
  operationId?: string;

  @Metadata({ data: "json, name=orderId" })
  orderId?: string;

  @Metadata({ data: "json, name=returnMethodType" })
  returnMethodType?: string;
}
