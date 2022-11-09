import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=externalEventId" })
  externalEventId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=subscriberState" })
  subscriberState: string;
}


export class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=externalAccountId" })
  externalAccountId?: string;
}


export class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateSecurityOption2;
}


export class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreatePathParams;

  @Metadata()
  queryParams: PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchInputMarketingEventEmailSubscriber;

  @Metadata()
  security: PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateSecurity;
}


export class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateResponse extends SpeakeasyBase {
  @Metadata()
  batchResponseSubscriberEmailResponse?: shared.BatchResponseSubscriberEmailResponse;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
