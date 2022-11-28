import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ShippingMethodEditShippingMethod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callback_url" })
  callbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=fetch_services_url" })
  fetchServicesUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=postal" })
  postal?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;
}


export class ShippingMethodEdit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=shipping_method" })
  shippingMethod?: ShippingMethodEditShippingMethod;
}
