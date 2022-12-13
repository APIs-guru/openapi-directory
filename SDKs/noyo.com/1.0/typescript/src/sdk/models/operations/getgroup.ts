import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: string;
}


export class GetGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGroupPathParams;
}


export class GetGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  groupResult?: shared.GroupResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
