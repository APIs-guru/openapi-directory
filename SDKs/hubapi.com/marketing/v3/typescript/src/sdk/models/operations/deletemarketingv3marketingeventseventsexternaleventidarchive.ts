import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteMarketingV3MarketingEventsEventsExternalEventIdArchivePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=externalEventId" })
  externalEventId: string;
}


export class DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=externalAccountId" })
  externalAccountId: string;
}


export class DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveSecurityOption2;
}


export class DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteMarketingV3MarketingEventsEventsExternalEventIdArchivePathParams;

  @Metadata()
  queryParams: DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveQueryParams;

  @Metadata()
  security: DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveSecurity;
}


export class DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
