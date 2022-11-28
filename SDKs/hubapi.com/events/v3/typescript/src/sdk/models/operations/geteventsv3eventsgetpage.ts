import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEventsV3EventsGetPageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after" })
  after?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before" })
  before?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=eventType" })
  eventType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=objectId" })
  objectId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=objectType" })
  objectType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=occurredAfter" })
  occurredAfter?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=occurredBefore" })
  occurredBefore?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string[];
}


export class GetEventsV3EventsGetPageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey?: shared.SchemeHapikey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy?: shared.SchemeOauth2Legacy;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
}


export class GetEventsV3EventsGetPageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetEventsV3EventsGetPageQueryParams;

  @SpeakeasyMetadata()
  security: GetEventsV3EventsGetPageSecurity;
}


export class GetEventsV3EventsGetPageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  collectionResponseExternalUnifiedEvent?: shared.CollectionResponseExternalUnifiedEvent;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
