import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRealmUsersIdGroupsCountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class GetRealmUsersIdGroupsCountQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class GetRealmUsersIdGroupsCountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRealmUsersIdGroupsCountPathParams;

  @SpeakeasyMetadata()
  queryParams: GetRealmUsersIdGroupsCountQueryParams;
}


export class GetRealmUsersIdGroupsCountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getRealmUsersIdGroupsCount2XxApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
