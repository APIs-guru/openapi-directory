import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteMarketingV3MarketingEventsEventsExternalEventIdArchivePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=externalEventId" })
  externalEventId: string;
}


export class DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=externalAccountId" })
  externalAccountId: string;
}


export class DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey?: shared.SchemeHapikey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  privateAppsLegacy?: shared.SchemePrivateAppsLegacy;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy?: shared.SchemeOauth2Legacy;
}


export class DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteMarketingV3MarketingEventsEventsExternalEventIdArchivePathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveQueryParams;

  @SpeakeasyMetadata()
  security: DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveSecurity;
}


export class DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
