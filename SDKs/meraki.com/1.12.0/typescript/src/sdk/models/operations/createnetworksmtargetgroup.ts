import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateNetworkSmTargetGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class CreateNetworkSmTargetGroupRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=scope" })
  scope?: string;
}


export class CreateNetworkSmTargetGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateNetworkSmTargetGroupPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: CreateNetworkSmTargetGroupRequestBody;
}


export class CreateNetworkSmTargetGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createNetworkSmTargetGroup201ApplicationJsonObject?: Map<string, any>;
}
