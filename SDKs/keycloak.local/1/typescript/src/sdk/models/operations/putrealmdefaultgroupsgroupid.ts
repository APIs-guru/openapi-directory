import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutRealmDefaultGroupsGroupIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmDefaultGroupsGroupIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutRealmDefaultGroupsGroupIdPathParams;
}


export class PutRealmDefaultGroupsGroupIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
