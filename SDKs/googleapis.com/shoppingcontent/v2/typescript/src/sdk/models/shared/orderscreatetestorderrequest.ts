import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TestOrder } from "./testorder";


export class OrdersCreateTestOrderRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=templateName" })
  templateName?: string;

  @Metadata({ data: "json, name=testOrder" })
  testOrder?: TestOrder;
}
