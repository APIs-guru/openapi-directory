import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostMarketingV3MarketingEventsEventsCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey?: shared.SchemeHapikey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  privateAppsLegacy?: shared.SchemePrivateAppsLegacy;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy?: shared.SchemeOauth2Legacy;
}


export class PostMarketingV3MarketingEventsEventsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.MarketingEventCreateRequestParams;

  @SpeakeasyMetadata()
  security: PostMarketingV3MarketingEventsEventsCreateSecurity;
}


export class PostMarketingV3MarketingEventsEventsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  marketingEventDefaultResponse?: shared.MarketingEventDefaultResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
