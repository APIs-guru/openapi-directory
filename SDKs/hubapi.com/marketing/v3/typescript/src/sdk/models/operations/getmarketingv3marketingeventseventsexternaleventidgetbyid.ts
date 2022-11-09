import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=externalEventId" })
  externalEventId: string;
}


export class GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=externalAccountId" })
  externalAccountId: string;
}


export class GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdSecurityOption2;
}


export class GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdPathParams;

  @Metadata()
  queryParams: GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdQueryParams;

  @Metadata()
  security: GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdSecurity;
}


export class GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  marketingEventPublicReadResponse?: shared.MarketingEventPublicReadResponse;

  @Metadata()
  statusCode: number;
}
