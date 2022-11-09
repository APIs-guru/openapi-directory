import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ShippingService extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=service_code" })
  serviceCode?: string;
}
