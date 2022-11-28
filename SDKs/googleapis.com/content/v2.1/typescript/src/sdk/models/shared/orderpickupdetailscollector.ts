import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrderPickupDetailsCollector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;
}
