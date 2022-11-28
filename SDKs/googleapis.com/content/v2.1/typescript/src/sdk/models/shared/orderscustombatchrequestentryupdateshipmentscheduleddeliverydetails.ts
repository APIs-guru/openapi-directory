import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails
/** 
 * ScheduledDeliveryDetails used to update the scheduled delivery order.
**/
export class OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carrierPhoneNumber" })
  carrierPhoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduledDate" })
  scheduledDate?: string;
}
