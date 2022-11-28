import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=externalEventId" })
  externalEventId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriberState" })
  subscriberState: string;
}


export class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=externalAccountId" })
  externalAccountId?: string;
}


export class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey?: shared.SchemeHapikey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  privateAppsLegacy?: shared.SchemePrivateAppsLegacy;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy?: shared.SchemeOauth2Legacy;
}


export class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreatePathParams;

  @SpeakeasyMetadata()
  queryParams: PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.BatchInputMarketingEventSubscriber;

  @SpeakeasyMetadata()
  security: PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateSecurity;
}


export class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchResponseSubscriberVidResponse?: shared.BatchResponseSubscriberVidResponse;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
