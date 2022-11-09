import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostMarketingV3MarketingEventsEventsCreateSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class PostMarketingV3MarketingEventsEventsCreateSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class PostMarketingV3MarketingEventsEventsCreateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostMarketingV3MarketingEventsEventsCreateSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostMarketingV3MarketingEventsEventsCreateSecurityOption2;
}


export class PostMarketingV3MarketingEventsEventsCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.MarketingEventCreateRequestParams;

  @Metadata()
  security: PostMarketingV3MarketingEventsEventsCreateSecurity;
}


export class PostMarketingV3MarketingEventsEventsCreateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  marketingEventDefaultResponse?: shared.MarketingEventDefaultResponse;

  @Metadata()
  statusCode: number;
}
