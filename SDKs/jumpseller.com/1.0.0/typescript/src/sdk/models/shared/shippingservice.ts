import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ShippingService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=service_code" })
  serviceCode?: string;
}
