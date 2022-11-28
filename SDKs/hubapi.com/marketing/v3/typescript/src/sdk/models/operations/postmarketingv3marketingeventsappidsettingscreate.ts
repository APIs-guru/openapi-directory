import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostMarketingV3MarketingEventsAppIdSettingsCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;
}


export class PostMarketingV3MarketingEventsAppIdSettingsCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey?: shared.SchemeHapikey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey?: shared.SchemeDeveloperHapikey;
}


export class PostMarketingV3MarketingEventsAppIdSettingsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostMarketingV3MarketingEventsAppIdSettingsCreatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.EventDetailSettingsUrl;

  @SpeakeasyMetadata()
  security: PostMarketingV3MarketingEventsAppIdSettingsCreateSecurity;
}


export class PostMarketingV3MarketingEventsAppIdSettingsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  eventDetailSettings?: shared.EventDetailSettings;

  @SpeakeasyMetadata()
  statusCode: number;
}
