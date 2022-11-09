import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CheckResponse
/** 
 * Success
**/
export class CheckResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=estimated_price_messages_sent" })
  estimatedPriceMessagesSent?: string;

  @Metadata({ data: "json, name=event_id" })
  eventId?: string;

  @Metadata({ data: "json, name=price" })
  price?: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
