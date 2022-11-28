import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmClientsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmClientsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first" })
  first?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=viewableOnly" })
  viewableOnly?: boolean;
}


export class GetRealmClientsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmClientsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetRealmClientsQueryParams;
}


export class GetRealmClientsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ClientRepresentation })
  clientRepresentations?: shared.ClientRepresentation[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
