import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ShippingService } from "./shippingservice";


export enum ShippingMethodFieldsTypeEnum {
    Free = "free",
    Tables = "tables",
    Correiosbr = "correiosbr",
    CorreosChile = "correos_chile",
    Chilexpress = "chilexpress",
    Flat = "flat",
    Ups = "ups",
    External = "external"
}


export class ShippingMethodFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callback_url" })
  callbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=fetch_services_url" })
  fetchServicesUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=postal" })
  postal?: string;

  @SpeakeasyMetadata({ data: "json, name=services", elemType: ShippingService })
  services?: ShippingService[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ShippingMethodFieldsTypeEnum;
}
