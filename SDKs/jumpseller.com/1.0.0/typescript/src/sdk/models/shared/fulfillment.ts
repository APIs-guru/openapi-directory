import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FulfillmentFields } from "./fulfillmentfields";



export class Fulfillment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: FulfillmentFields;
}
