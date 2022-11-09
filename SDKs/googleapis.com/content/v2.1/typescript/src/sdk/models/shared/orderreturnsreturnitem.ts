import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrderreturnsRefundOperation } from "./orderreturnsrefundoperation";
import { OrderreturnsRejectOperation } from "./orderreturnsrejectoperation";


export class OrderreturnsReturnItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=refund" })
  refund?: OrderreturnsRefundOperation;

  @Metadata({ data: "json, name=reject" })
  reject?: OrderreturnsRejectOperation;

  @Metadata({ data: "json, name=returnItemId" })
  returnItemId?: string;
}
