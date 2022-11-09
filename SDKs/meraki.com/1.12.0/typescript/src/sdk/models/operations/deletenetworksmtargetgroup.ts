import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteNetworkSmTargetGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=targetGroupId" })
  targetGroupId: string;
}


export class DeleteNetworkSmTargetGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteNetworkSmTargetGroupPathParams;
}


export class DeleteNetworkSmTargetGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
