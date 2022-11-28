import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TestOrder } from "./testorder";



export class OrdersCreateTestOrderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=templateName" })
  templateName?: string;

  @SpeakeasyMetadata({ data: "json, name=testOrder" })
  testOrder?: TestOrder;
}
