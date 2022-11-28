import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRealmUsersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmUsersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=briefRepresentation" })
  briefRepresentation?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first" })
  first?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max" })
  max?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=username" })
  username?: string;
}


export class GetRealmUsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmUsersPathParams;

  @SpeakeasyMetadata()
  queryParams: GetRealmUsersQueryParams;
}


export class GetRealmUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.UserRepresentation })
  userRepresentations?: shared.UserRepresentation[];
}
