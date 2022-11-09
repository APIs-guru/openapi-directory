import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostMarketingV3MarketingEventsEventsExternalEventIdCompletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=externalEventId" })
  externalEventId: string;
}


export class PostMarketingV3MarketingEventsEventsExternalEventIdCompleteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=externalAccountId" })
  externalAccountId: string;
}


export class PostMarketingV3MarketingEventsEventsExternalEventIdCompleteSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class PostMarketingV3MarketingEventsEventsExternalEventIdCompleteSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class PostMarketingV3MarketingEventsEventsExternalEventIdCompleteSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostMarketingV3MarketingEventsEventsExternalEventIdCompleteSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostMarketingV3MarketingEventsEventsExternalEventIdCompleteSecurityOption2;
}


export class PostMarketingV3MarketingEventsEventsExternalEventIdCompleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostMarketingV3MarketingEventsEventsExternalEventIdCompletePathParams;

  @Metadata()
  queryParams: PostMarketingV3MarketingEventsEventsExternalEventIdCompleteQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.MarketingEventCompleteRequestParams;

  @Metadata()
  security: PostMarketingV3MarketingEventsEventsExternalEventIdCompleteSecurity;
}


export class PostMarketingV3MarketingEventsEventsExternalEventIdCompleteResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  marketingEventDefaultResponse?: shared.MarketingEventDefaultResponse;

  @Metadata()
  statusCode: number;
}
