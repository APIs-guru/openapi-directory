import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmClientsIdUserSessionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmClientsIdUserSessionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=first" })
  first?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: number;
}


export class GetRealmClientsIdUserSessionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmClientsIdUserSessionsPathParams;

  @Metadata()
  queryParams: GetRealmClientsIdUserSessionsQueryParams;
}


export class GetRealmClientsIdUserSessionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.UserSessionRepresentation })
  userSessionRepresentations?: shared.UserSessionRepresentation[];
}
