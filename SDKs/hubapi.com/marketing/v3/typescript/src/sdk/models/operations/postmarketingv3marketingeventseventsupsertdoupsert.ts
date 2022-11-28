import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey?: shared.SchemeHapikey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  privateAppsLegacy?: shared.SchemePrivateAppsLegacy;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy?: shared.SchemeOauth2Legacy;
}


export class PostMarketingV3MarketingEventsEventsUpsertDoUpsertRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.BatchInputMarketingEventCreateRequestParams;

  @SpeakeasyMetadata()
  security: PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurity;
}


export class PostMarketingV3MarketingEventsEventsUpsertDoUpsertResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  batchResponseMarketingEventPublicDefaultResponse?: shared.BatchResponseMarketingEventPublicDefaultResponse;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
