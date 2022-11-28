import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ShippingMethodFreq extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
