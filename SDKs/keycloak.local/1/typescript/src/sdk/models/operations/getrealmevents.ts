import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmEventsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmEventsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=client" })
  client?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateFrom" })
  dateFrom?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateTo" })
  dateTo?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first" })
  first?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ipAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user" })
  user?: string;
}


export class GetRealmEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmEventsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetRealmEventsQueryParams;
}


export class GetRealmEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.EventRepresentation })
  eventRepresentations?: shared.EventRepresentation[];

  @SpeakeasyMetadata()
  statusCode: number;
}
