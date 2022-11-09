import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Price } from "./price";


export class OrderLineItemProductFee extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: Price;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
