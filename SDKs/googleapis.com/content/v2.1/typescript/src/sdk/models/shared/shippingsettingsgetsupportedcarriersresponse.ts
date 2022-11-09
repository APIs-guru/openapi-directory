import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CarriersCarrier } from "./carrierscarrier";


export class ShippingsettingsGetSupportedCarriersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=carriers", elemType: shared.CarriersCarrier })
  carriers?: CarriersCarrier[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
