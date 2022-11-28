import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutRealmDefaultGroupsGroupIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PutRealmDefaultGroupsGroupIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutRealmDefaultGroupsGroupIdPathParams;
}


export class PutRealmDefaultGroupsGroupIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
