import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=externalEventId" })
  externalEventId: string;
}


export class PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=externalAccountId" })
  externalAccountId: string;
}


export class PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey?: shared.SchemeHapikey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  privateAppsLegacy?: shared.SchemePrivateAppsLegacy;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy?: shared.SchemeOauth2Legacy;
}


export class PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompletePathParams;

  @SpeakeasyMetadata()
  queryParams: PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.MarketingEventCompleteRequestParams;

  @SpeakeasyMetadata()
  security: PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteSecurity;
}


export class PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  marketingEventDefaultResponse?: shared.MarketingEventDefaultResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
