import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Price } from "./price";


export class ProductSubscriptionCost extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: Price;

  @Metadata({ data: "json, name=period" })
  period?: string;

  @Metadata({ data: "json, name=periodLength" })
  periodLength?: string;
}
