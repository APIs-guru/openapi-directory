import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchMarketingV3MarketingEventsEventsExternalEventIdUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=externalEventId" })
  externalEventId: string;
}


export class PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=externalAccountId" })
  externalAccountId: string;
}


export class PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey?: shared.SchemeHapikey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  privateAppsLegacy?: shared.SchemePrivateAppsLegacy;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy?: shared.SchemeOauth2Legacy;
}


export class PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchMarketingV3MarketingEventsEventsExternalEventIdUpdatePathParams;

  @SpeakeasyMetadata()
  queryParams: PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.MarketingEventUpdateRequestParams;

  @SpeakeasyMetadata()
  security: PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateSecurity;
}


export class PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  marketingEventPublicDefaultResponse?: shared.MarketingEventPublicDefaultResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
