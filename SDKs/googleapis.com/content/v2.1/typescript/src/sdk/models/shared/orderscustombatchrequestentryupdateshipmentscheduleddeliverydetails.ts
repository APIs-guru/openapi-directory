import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails
/** 
 * ScheduledDeliveryDetails used to update the scheduled delivery order.
**/
export class OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=carrierPhoneNumber" })
  carrierPhoneNumber?: string;

  @Metadata({ data: "json, name=scheduledDate" })
  scheduledDate?: string;
}
