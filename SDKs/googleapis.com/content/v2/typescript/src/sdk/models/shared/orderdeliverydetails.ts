import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrderAddress } from "./orderaddress";


export class OrderDeliveryDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: OrderAddress;

  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;
}
