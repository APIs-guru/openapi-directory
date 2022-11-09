import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRealmClientsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmClientsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=clientId" })
  clientId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=first" })
  first?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=viewableOnly" })
  viewableOnly?: boolean;
}


export class GetRealmClientsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmClientsPathParams;

  @Metadata()
  queryParams: GetRealmClientsQueryParams;
}


export class GetRealmClientsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.ClientRepresentation })
  clientRepresentations?: shared.ClientRepresentation[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
