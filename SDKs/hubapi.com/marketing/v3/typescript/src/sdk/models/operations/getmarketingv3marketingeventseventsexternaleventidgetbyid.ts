import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=externalEventId" })
  externalEventId: string;
}


export class GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=externalAccountId" })
  externalAccountId: string;
}


export class GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey?: shared.SchemeHapikey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy?: shared.SchemeOauth2Legacy;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
}


export class GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdQueryParams;

  @SpeakeasyMetadata()
  security: GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdSecurity;
}


export class GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  marketingEventPublicReadResponse?: shared.MarketingEventPublicReadResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
