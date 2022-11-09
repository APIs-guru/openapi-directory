import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmEventsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmEventsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=client" })
  client?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dateFrom" })
  dateFrom?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dateTo" })
  dateTo?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=first" })
  first?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ipAddress" })
  ipAddress?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=user" })
  user?: string;
}


export class GetRealmEventsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmEventsPathParams;

  @Metadata()
  queryParams: GetRealmEventsQueryParams;
}


export class GetRealmEventsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.EventRepresentation })
  eventRepresentations?: shared.EventRepresentation[];

  @Metadata()
  statusCode: number;
}
