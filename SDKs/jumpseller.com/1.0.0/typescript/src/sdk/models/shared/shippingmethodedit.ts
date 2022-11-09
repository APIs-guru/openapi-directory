import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ShippingMethodEditShippingMethod extends SpeakeasyBase {
  @Metadata({ data: "json, name=callback_url" })
  callbackUrl?: string;

  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=fetch_services_url" })
  fetchServicesUrl?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=postal" })
  postal?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=token" })
  token?: string;
}


export class ShippingMethodEdit extends SpeakeasyBase {
  @Metadata({ data: "json, name=shipping_method" })
  shippingMethod?: ShippingMethodEditShippingMethod;
}
