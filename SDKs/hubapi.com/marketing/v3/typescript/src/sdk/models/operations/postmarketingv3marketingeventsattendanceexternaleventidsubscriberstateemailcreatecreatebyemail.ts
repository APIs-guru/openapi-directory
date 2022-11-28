import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=externalEventId" })
  externalEventId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriberState" })
  subscriberState: string;
}


export class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=externalAccountId" })
  externalAccountId?: string;
}


export class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey?: shared.SchemeHapikey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  privateAppsLegacy?: shared.SchemePrivateAppsLegacy;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy?: shared.SchemeOauth2Legacy;
}


export class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailPathParams;

  @SpeakeasyMetadata()
  queryParams: PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.BatchInputMarketingEventEmailSubscriber;

  @SpeakeasyMetadata()
  security: PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailSecurity;
}


export class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchResponseSubscriberEmailResponse?: shared.BatchResponseSubscriberEmailResponse;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
