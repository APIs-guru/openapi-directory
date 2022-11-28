import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderreturnsRefundOperation } from "./orderreturnsrefundoperation";
import { OrderreturnsRejectOperation } from "./orderreturnsrejectoperation";



export class OrderreturnsReturnItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=refund" })
  refund?: OrderreturnsRefundOperation;

  @SpeakeasyMetadata({ data: "json, name=reject" })
  reject?: OrderreturnsRejectOperation;

  @SpeakeasyMetadata({ data: "json, name=returnItemId" })
  returnItemId?: string;
}
