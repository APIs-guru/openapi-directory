import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkSmTargetGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=targetGroupId" })
  targetGroupId: string;
}


export class UpdateNetworkSmTargetGroupRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=scope" })
  scope?: string;
}


export class UpdateNetworkSmTargetGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkSmTargetGroupPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkSmTargetGroupRequestBody;
}


export class UpdateNetworkSmTargetGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkSmTargetGroup200ApplicationJsonObject?: Map<string, any>;
}
