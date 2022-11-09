import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmAdminEventsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmAdminEventsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authClient" })
  authClient?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=authIpAddress" })
  authIpAddress?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=authRealm" })
  authRealm?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=authUser" })
  authUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dateFrom" })
  dateFrom?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dateTo" })
  dateTo?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=first" })
  first?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=operationTypes" })
  operationTypes?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=resourcePath" })
  resourcePath?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=resourceTypes" })
  resourceTypes?: string[];
}


export class GetRealmAdminEventsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmAdminEventsPathParams;

  @Metadata()
  queryParams: GetRealmAdminEventsQueryParams;
}


export class GetRealmAdminEventsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.AdminEventRepresentation })
  adminEventRepresentations?: shared.AdminEventRepresentation[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
