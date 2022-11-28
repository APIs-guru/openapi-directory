import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmClientsIdUserSessionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmClientsIdUserSessionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first" })
  first?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: number;
}


export class GetRealmClientsIdUserSessionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmClientsIdUserSessionsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetRealmClientsIdUserSessionsQueryParams;
}


export class GetRealmClientsIdUserSessionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.UserSessionRepresentation })
  userSessionRepresentations?: shared.UserSessionRepresentation[];
}
