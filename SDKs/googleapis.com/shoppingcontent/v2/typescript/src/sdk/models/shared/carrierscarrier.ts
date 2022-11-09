import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CarriersCarrier extends SpeakeasyBase {
  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=eddServices" })
  eddServices?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=services" })
  services?: string[];
}
