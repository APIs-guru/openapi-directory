import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=externalEventId" })
  externalEventId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscriberState" })
  subscriberState: string;
}


export class PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=externalAccountId" })
  externalAccountId: string;
}


export class PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey?: shared.SchemeHapikey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  privateAppsLegacy?: shared.SchemePrivateAppsLegacy;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy?: shared.SchemeOauth2Legacy;
}


export class PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdPathParams;

  @SpeakeasyMetadata()
  queryParams: PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.BatchInputMarketingEventSubscriber;

  @SpeakeasyMetadata()
  security: PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdSecurity;
}


export class PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
