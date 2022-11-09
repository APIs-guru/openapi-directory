import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FulfillmentFields } from "./fulfillmentfields";


export class Fulfillment extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: FulfillmentFields;
}
