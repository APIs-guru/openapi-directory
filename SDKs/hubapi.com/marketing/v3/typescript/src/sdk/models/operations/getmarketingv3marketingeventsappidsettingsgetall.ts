import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMarketingV3MarketingEventsAppIdSettingsGetAllPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appId" })
  appId: number;
}


export class GetMarketingV3MarketingEventsAppIdSettingsGetAllSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class GetMarketingV3MarketingEventsAppIdSettingsGetAllSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  developerHapikey: shared.SchemeDeveloperHapikey;
}


export class GetMarketingV3MarketingEventsAppIdSettingsGetAllSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetMarketingV3MarketingEventsAppIdSettingsGetAllSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetMarketingV3MarketingEventsAppIdSettingsGetAllSecurityOption2;
}


export class GetMarketingV3MarketingEventsAppIdSettingsGetAllRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMarketingV3MarketingEventsAppIdSettingsGetAllPathParams;

  @Metadata()
  security: GetMarketingV3MarketingEventsAppIdSettingsGetAllSecurity;
}


export class GetMarketingV3MarketingEventsAppIdSettingsGetAllResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  eventDetailSettings?: shared.EventDetailSettings;

  @Metadata()
  statusCode: number;
}
