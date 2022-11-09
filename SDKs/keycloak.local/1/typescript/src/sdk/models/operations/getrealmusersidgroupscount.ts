import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRealmUsersIdGroupsCountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmUsersIdGroupsCountQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class GetRealmUsersIdGroupsCountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRealmUsersIdGroupsCountPathParams;

  @Metadata()
  queryParams: GetRealmUsersIdGroupsCountQueryParams;
}


export class GetRealmUsersIdGroupsCountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getRealmUsersIdGroupsCount2XxApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
