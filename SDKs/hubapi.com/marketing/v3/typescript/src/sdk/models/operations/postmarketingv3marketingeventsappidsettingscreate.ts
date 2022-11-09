import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostMarketingV3MarketingEventsAppIdSettingsCreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;
}


export class PostMarketingV3MarketingEventsAppIdSettingsCreateSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class PostMarketingV3MarketingEventsAppIdSettingsCreateSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class PostMarketingV3MarketingEventsAppIdSettingsCreateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostMarketingV3MarketingEventsAppIdSettingsCreateSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostMarketingV3MarketingEventsAppIdSettingsCreateSecurityOption2;
}


export class PostMarketingV3MarketingEventsAppIdSettingsCreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostMarketingV3MarketingEventsAppIdSettingsCreatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.EventDetailSettingsUrl;

  @Metadata()
  security: PostMarketingV3MarketingEventsAppIdSettingsCreateSecurity;
}


export class PostMarketingV3MarketingEventsAppIdSettingsCreateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  eventDetailSettings?: shared.EventDetailSettings;

  @Metadata()
  statusCode: number;
}
