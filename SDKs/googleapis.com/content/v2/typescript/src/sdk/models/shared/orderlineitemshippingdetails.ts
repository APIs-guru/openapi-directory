import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderLineItemShippingDetailsMethod } from "./orderlineitemshippingdetailsmethod";



export class OrderLineItemShippingDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deliverByDate" })
  deliverByDate?: string;

  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: OrderLineItemShippingDetailsMethod;

  @SpeakeasyMetadata({ data: "json, name=shipByDate" })
  shipByDate?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
