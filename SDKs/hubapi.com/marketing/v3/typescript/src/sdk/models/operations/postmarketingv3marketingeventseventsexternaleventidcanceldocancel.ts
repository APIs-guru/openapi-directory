import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=externalEventId" })
  externalEventId: string;
}


export class PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=externalAccountId" })
  externalAccountId: string;
}


export class PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey?: shared.SchemeHapikey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  privateAppsLegacy?: shared.SchemePrivateAppsLegacy;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy?: shared.SchemeOauth2Legacy;
}


export class PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelPathParams;

  @SpeakeasyMetadata()
  queryParams: PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelQueryParams;

  @SpeakeasyMetadata()
  security: PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurity;
}


export class PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  marketingEventDefaultResponse?: shared.MarketingEventDefaultResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
