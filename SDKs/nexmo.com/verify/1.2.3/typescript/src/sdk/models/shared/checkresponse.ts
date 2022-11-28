import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CheckResponse
/** 
 * Success
**/
export class CheckResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=estimated_price_messages_sent" })
  estimatedPriceMessagesSent?: string;

  @SpeakeasyMetadata({ data: "json, name=event_id" })
  eventId?: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
