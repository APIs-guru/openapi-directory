import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRealmUsersIdGroupsGroupIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class DeleteRealmUsersIdGroupsGroupIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRealmUsersIdGroupsGroupIdPathParams;
}


export class DeleteRealmUsersIdGroupsGroupIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
