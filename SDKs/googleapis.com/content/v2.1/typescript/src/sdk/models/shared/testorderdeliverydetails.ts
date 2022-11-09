import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TestOrderAddress } from "./testorderaddress";


export class TestOrderDeliveryDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: TestOrderAddress;

  @Metadata({ data: "json, name=isScheduledDelivery" })
  isScheduledDelivery?: boolean;

  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;
}
