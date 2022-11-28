import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutMarketingV3MarketingEventsEventsExternalEventIdReplacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=externalEventId" })
  externalEventId: string;
}


export class PutMarketingV3MarketingEventsEventsExternalEventIdReplaceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey?: shared.SchemeHapikey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  privateAppsLegacy?: shared.SchemePrivateAppsLegacy;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy?: shared.SchemeOauth2Legacy;
}


export class PutMarketingV3MarketingEventsEventsExternalEventIdReplaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutMarketingV3MarketingEventsEventsExternalEventIdReplacePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.MarketingEventCreateRequestParams;

  @SpeakeasyMetadata()
  security: PutMarketingV3MarketingEventsEventsExternalEventIdReplaceSecurity;
}


export class PutMarketingV3MarketingEventsEventsExternalEventIdReplaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  marketingEventPublicDefaultResponse?: shared.MarketingEventPublicDefaultResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
