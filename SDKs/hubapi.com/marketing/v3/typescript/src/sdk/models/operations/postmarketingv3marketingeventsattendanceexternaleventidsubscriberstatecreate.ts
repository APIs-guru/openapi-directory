import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=externalEventId" })
  externalEventId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=subscriberState" })
  subscriberState: string;
}


export class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=externalAccountId" })
  externalAccountId?: string;
}


export class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateSecurityOption2;
}


export class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreatePathParams;

  @Metadata()
  queryParams: PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchInputMarketingEventSubscriber;

  @Metadata()
  security: PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateSecurity;
}


export class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateResponse extends SpeakeasyBase {
  @Metadata()
  batchResponseSubscriberVidResponse?: shared.BatchResponseSubscriberVidResponse;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
