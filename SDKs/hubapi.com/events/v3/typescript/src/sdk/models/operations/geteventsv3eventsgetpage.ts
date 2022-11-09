import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEventsV3EventsGetPageQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=after" })
  after?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=before" })
  before?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=eventType" })
  eventType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=objectId" })
  objectId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=objectType" })
  objectType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=occurredAfter" })
  occurredAfter?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=occurredBefore" })
  occurredBefore?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string[];
}


export class GetEventsV3EventsGetPageSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class GetEventsV3EventsGetPageSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class GetEventsV3EventsGetPageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetEventsV3EventsGetPageSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetEventsV3EventsGetPageSecurityOption2;
}


export class GetEventsV3EventsGetPageRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetEventsV3EventsGetPageQueryParams;

  @Metadata()
  security: GetEventsV3EventsGetPageSecurity;
}


export class GetEventsV3EventsGetPageResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  collectionResponseExternalUnifiedEvent?: shared.CollectionResponseExternalUnifiedEvent;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
