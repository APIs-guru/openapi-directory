import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMarketingV3MarketingEventsEventsSearchDoSearchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string;
}


export class GetMarketingV3MarketingEventsEventsSearchDoSearchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey?: shared.SchemeHapikey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy?: shared.SchemeOauth2Legacy;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
}


export class GetMarketingV3MarketingEventsEventsSearchDoSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetMarketingV3MarketingEventsEventsSearchDoSearchQueryParams;

  @SpeakeasyMetadata()
  security: GetMarketingV3MarketingEventsEventsSearchDoSearchSecurity;
}


export class GetMarketingV3MarketingEventsEventsSearchDoSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  collectionResponseMarketingEventExternalUniqueIdentifierNoPaging?: shared.CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
