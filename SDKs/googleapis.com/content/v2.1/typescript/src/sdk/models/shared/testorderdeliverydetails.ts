import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TestOrderAddress } from "./testorderaddress";



export class TestOrderDeliveryDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: TestOrderAddress;

  @SpeakeasyMetadata({ data: "json, name=isScheduledDelivery" })
  isScheduledDelivery?: boolean;

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;
}
