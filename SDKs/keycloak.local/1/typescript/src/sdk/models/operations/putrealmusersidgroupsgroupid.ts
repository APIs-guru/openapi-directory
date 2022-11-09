import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutRealmUsersIdGroupsGroupIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmUsersIdGroupsGroupIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutRealmUsersIdGroupsGroupIdPathParams;
}


export class PutRealmUsersIdGroupsGroupIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
