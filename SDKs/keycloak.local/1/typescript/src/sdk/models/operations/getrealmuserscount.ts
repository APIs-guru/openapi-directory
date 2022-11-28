import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRealmUsersCountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmUsersCountQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=username" })
  username?: string;
}


export class GetRealmUsersCountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmUsersCountPathParams;

  @SpeakeasyMetadata()
  queryParams: GetRealmUsersCountQueryParams;
}


export class GetRealmUsersCountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRealmUsersCount2XxApplicationJsonInt32Integer?: number;

  @SpeakeasyMetadata()
  statusCode: number;
}
