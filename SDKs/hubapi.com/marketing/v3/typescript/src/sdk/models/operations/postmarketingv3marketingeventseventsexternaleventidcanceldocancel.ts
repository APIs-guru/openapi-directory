import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=externalEventId" })
  externalEventId: string;
}


export class PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=externalAccountId" })
  externalAccountId: string;
}


export class PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurityOption2;
}


export class PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelPathParams;

  @Metadata()
  queryParams: PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelQueryParams;

  @Metadata()
  security: PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurity;
}


export class PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  marketingEventDefaultResponse?: shared.MarketingEventDefaultResponse;

  @Metadata()
  statusCode: number;
}
