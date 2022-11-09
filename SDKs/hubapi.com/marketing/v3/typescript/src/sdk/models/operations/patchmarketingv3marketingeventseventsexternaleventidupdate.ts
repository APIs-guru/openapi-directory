import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchMarketingV3MarketingEventsEventsExternalEventIdUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=externalEventId" })
  externalEventId: string;
}


export class PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=externalAccountId" })
  externalAccountId: string;
}


export class PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateSecurityOption2;
}


export class PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchMarketingV3MarketingEventsEventsExternalEventIdUpdatePathParams;

  @Metadata()
  queryParams: PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.MarketingEventUpdateRequestParams;

  @Metadata()
  security: PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateSecurity;
}


export class PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  marketingEventPublicDefaultResponse?: shared.MarketingEventPublicDefaultResponse;

  @Metadata()
  statusCode: number;
}
