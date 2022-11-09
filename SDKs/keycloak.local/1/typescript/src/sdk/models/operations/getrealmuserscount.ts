import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRealmUsersCountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmUsersCountQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=firstName" })
  firstName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lastName" })
  lastName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=username" })
  username?: string;
}


export class GetRealmUsersCountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmUsersCountPathParams;

  @Metadata()
  queryParams: GetRealmUsersCountQueryParams;
}


export class GetRealmUsersCountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getRealmUsersCount2XxApplicationJsonInt32Integer?: number;

  @Metadata()
  statusCode: number;
}
