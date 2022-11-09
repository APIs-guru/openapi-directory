import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrderShipmentScheduledDeliveryDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=carrierPhoneNumber" })
  carrierPhoneNumber?: string;

  @Metadata({ data: "json, name=scheduledDate" })
  scheduledDate?: string;
}
