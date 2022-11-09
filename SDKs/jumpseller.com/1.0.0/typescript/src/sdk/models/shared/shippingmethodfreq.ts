import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ShippingMethodFreq extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
