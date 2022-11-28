import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";



export class ProductSubscriptionCost extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: Price;

  @SpeakeasyMetadata({ data: "json, name=period" })
  period?: string;

  @SpeakeasyMetadata({ data: "json, name=periodLength" })
  periodLength?: string;
}
