import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CarriersCarrier } from "./carrierscarrier";



export class ShippingsettingsGetSupportedCarriersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carriers", elemType: CarriersCarrier })
  carriers?: CarriersCarrier[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
