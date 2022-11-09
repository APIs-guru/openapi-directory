import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ShippingService } from "./shippingservice";

export enum ShippingMethodFieldsTypeEnum {
    Free = "free"
,    Tables = "tables"
,    Correiosbr = "correiosbr"
,    CorreosChile = "correos_chile"
,    Chilexpress = "chilexpress"
,    Flat = "flat"
,    Ups = "ups"
,    External = "external"
}


export class ShippingMethodFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=callback_url" })
  callbackUrl?: string;

  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=fetch_services_url" })
  fetchServicesUrl?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=postal" })
  postal?: string;

  @Metadata({ data: "json, name=services", elemType: shared.ShippingService })
  services?: ShippingService[];

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=type" })
  type?: ShippingMethodFieldsTypeEnum;
}
