import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderAddress } from "./orderaddress";



export class OrderDeliveryDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: OrderAddress;

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;
}
