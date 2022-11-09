import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SearchResponseChecksStatusEnum {
    Valid = "VALID"
,    Invalid = "INVALID"
}


export class SearchResponseChecks extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=date_received" })
  dateReceived?: string;

  @Metadata({ data: "json, name=ip_address" })
  ipAddress?: string;

  @Metadata({ data: "json, name=status" })
  status?: SearchResponseChecksStatusEnum;
}

export enum SearchResponseEventsTypeEnum {
    Tts = "tts"
,    Sms = "sms"
}


export class SearchResponseEvents extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=type" })
  type?: SearchResponseEventsTypeEnum;
}

export enum SearchResponseStatusEnum {
    InProgress = "IN PROGRESS"
,    Success = "SUCCESS"
,    Failed = "FAILED"
,    Expired = "EXPIRED"
,    Cancelled = "CANCELLED"
}


// SearchResponse
/** 
 * Success
**/
export class SearchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_id" })
  accountId?: string;

  @Metadata({ data: "json, name=checks", elemType: shared.SearchResponseChecks })
  checks?: SearchResponseChecks[];

  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=date_finalized" })
  dateFinalized?: string;

  @Metadata({ data: "json, name=date_submitted" })
  dateSubmitted?: string;

  @Metadata({ data: "json, name=estimated_price_messages_sent" })
  estimatedPriceMessagesSent?: string;

  @Metadata({ data: "json, name=events", elemType: shared.SearchResponseEvents })
  events?: SearchResponseEvents[];

  @Metadata({ data: "json, name=first_event_date" })
  firstEventDate?: string;

  @Metadata({ data: "json, name=last_event_date" })
  lastEventDate?: string;

  @Metadata({ data: "json, name=number" })
  number?: string;

  @Metadata({ data: "json, name=price" })
  price?: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;

  @Metadata({ data: "json, name=sender_id" })
  senderId?: string;

  @Metadata({ data: "json, name=status" })
  status?: SearchResponseStatusEnum;
}
