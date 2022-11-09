import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurityOption2;
}


export class PostMarketingV3MarketingEventsEventsUpsertDoUpsertRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BatchInputMarketingEventCreateRequestParams;

  @Metadata()
  security: PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurity;
}


export class PostMarketingV3MarketingEventsEventsUpsertDoUpsertResponse extends SpeakeasyBase {
  @Metadata()
  batchResponseMarketingEventPublicDefaultResponse?: shared.BatchResponseMarketingEventPublicDefaultResponse;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
