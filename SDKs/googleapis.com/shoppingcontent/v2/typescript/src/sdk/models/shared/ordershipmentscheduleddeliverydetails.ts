import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrderShipmentScheduledDeliveryDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carrierPhoneNumber" })
  carrierPhoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduledDate" })
  scheduledDate?: string;
}
