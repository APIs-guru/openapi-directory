import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrderLineItemShippingDetailsMethod } from "./orderlineitemshippingdetailsmethod";


export class OrderLineItemShippingDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=deliverByDate" })
  deliverByDate?: string;

  @Metadata({ data: "json, name=method" })
  method?: OrderLineItemShippingDetailsMethod;

  @Metadata({ data: "json, name=pickupPromiseInMinutes" })
  pickupPromiseInMinutes?: number;

  @Metadata({ data: "json, name=shipByDate" })
  shipByDate?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
