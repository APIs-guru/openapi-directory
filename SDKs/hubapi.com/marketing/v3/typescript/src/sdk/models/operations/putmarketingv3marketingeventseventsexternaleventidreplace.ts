import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutMarketingV3MarketingEventsEventsExternalEventIdReplacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=externalEventId" })
  externalEventId: string;
}


export class PutMarketingV3MarketingEventsEventsExternalEventIdReplaceSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class PutMarketingV3MarketingEventsEventsExternalEventIdReplaceSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class PutMarketingV3MarketingEventsEventsExternalEventIdReplaceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PutMarketingV3MarketingEventsEventsExternalEventIdReplaceSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PutMarketingV3MarketingEventsEventsExternalEventIdReplaceSecurityOption2;
}


export class PutMarketingV3MarketingEventsEventsExternalEventIdReplaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutMarketingV3MarketingEventsEventsExternalEventIdReplacePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.MarketingEventCreateRequestParams;

  @Metadata()
  security: PutMarketingV3MarketingEventsEventsExternalEventIdReplaceSecurity;
}


export class PutMarketingV3MarketingEventsEventsExternalEventIdReplaceResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  marketingEventPublicDefaultResponse?: shared.MarketingEventPublicDefaultResponse;

  @Metadata()
  statusCode: number;
}
