import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CarriersCarrier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=eddServices" })
  eddServices?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=services" })
  services?: string[];
}
