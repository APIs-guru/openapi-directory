import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMarketingV3MarketingEventsEventsSearchDoSearchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string;
}


export class GetMarketingV3MarketingEventsEventsSearchDoSearchSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class GetMarketingV3MarketingEventsEventsSearchDoSearchSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class GetMarketingV3MarketingEventsEventsSearchDoSearchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetMarketingV3MarketingEventsEventsSearchDoSearchSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetMarketingV3MarketingEventsEventsSearchDoSearchSecurityOption2;
}


export class GetMarketingV3MarketingEventsEventsSearchDoSearchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetMarketingV3MarketingEventsEventsSearchDoSearchQueryParams;

  @Metadata()
  security: GetMarketingV3MarketingEventsEventsSearchDoSearchSecurity;
}


export class GetMarketingV3MarketingEventsEventsSearchDoSearchResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  collectionResponseMarketingEventExternalUniqueIdentifierNoPaging?: shared.CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
