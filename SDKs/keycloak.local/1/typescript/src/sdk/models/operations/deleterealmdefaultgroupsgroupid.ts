import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRealmDefaultGroupsGroupIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class DeleteRealmDefaultGroupsGroupIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRealmDefaultGroupsGroupIdPathParams;
}


export class DeleteRealmDefaultGroupsGroupIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
