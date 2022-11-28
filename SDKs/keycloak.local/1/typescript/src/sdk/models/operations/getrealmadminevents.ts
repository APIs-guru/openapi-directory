import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmAdminEventsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmAdminEventsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authClient" })
  authClient?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authIpAddress" })
  authIpAddress?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authRealm" })
  authRealm?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authUser" })
  authUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateFrom" })
  dateFrom?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dateTo" })
  dateTo?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first" })
  first?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=operationTypes" })
  operationTypes?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resourcePath" })
  resourcePath?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resourceTypes" })
  resourceTypes?: string[];
}


export class GetRealmAdminEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmAdminEventsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetRealmAdminEventsQueryParams;
}


export class GetRealmAdminEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AdminEventRepresentation })
  adminEventRepresentations?: shared.AdminEventRepresentation[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
