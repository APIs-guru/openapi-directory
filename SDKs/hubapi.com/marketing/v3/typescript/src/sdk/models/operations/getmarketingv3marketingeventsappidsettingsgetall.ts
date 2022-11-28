import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMarketingV3MarketingEventsAppIdSettingsGetAllPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;
}


export class GetMarketingV3MarketingEventsAppIdSettingsGetAllSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey?: shared.SchemeHapikey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey?: shared.SchemeDeveloperHapikey;
}


export class GetMarketingV3MarketingEventsAppIdSettingsGetAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMarketingV3MarketingEventsAppIdSettingsGetAllPathParams;

  @SpeakeasyMetadata()
  security: GetMarketingV3MarketingEventsAppIdSettingsGetAllSecurity;
}


export class GetMarketingV3MarketingEventsAppIdSettingsGetAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  eventDetailSettings?: shared.EventDetailSettings;

  @SpeakeasyMetadata()
  statusCode: number;
}
