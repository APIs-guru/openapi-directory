import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SearchResponseChecksStatusEnum {
    Valid = "VALID",
    Invalid = "INVALID"
}


export class SearchResponseChecks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=date_received" })
  dateReceived?: string;

  @SpeakeasyMetadata({ data: "json, name=ip_address" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: SearchResponseChecksStatusEnum;
}

export enum SearchResponseEventsTypeEnum {
    Tts = "tts",
    Sms = "sms"
}


export class SearchResponseEvents extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: SearchResponseEventsTypeEnum;
}

export enum SearchResponseStatusEnum {
    InProgress = "IN PROGRESS",
    Success = "SUCCESS",
    Failed = "FAILED",
    Expired = "EXPIRED",
    Cancelled = "CANCELLED"
}


// SearchResponse
/** 
 * Success
**/
export class SearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=checks", elemType: SearchResponseChecks })
  checks?: SearchResponseChecks[];

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=date_finalized" })
  dateFinalized?: string;

  @SpeakeasyMetadata({ data: "json, name=date_submitted" })
  dateSubmitted?: string;

  @SpeakeasyMetadata({ data: "json, name=estimated_price_messages_sent" })
  estimatedPriceMessagesSent?: string;

  @SpeakeasyMetadata({ data: "json, name=events", elemType: SearchResponseEvents })
  events?: SearchResponseEvents[];

  @SpeakeasyMetadata({ data: "json, name=first_event_date" })
  firstEventDate?: string;

  @SpeakeasyMetadata({ data: "json, name=last_event_date" })
  lastEventDate?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: string;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=sender_id" })
  senderId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: SearchResponseStatusEnum;
}
