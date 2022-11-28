import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateNetworkSmTargetGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class CreateNetworkSmTargetGroupRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: string;
}


export class CreateNetworkSmTargetGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateNetworkSmTargetGroupPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateNetworkSmTargetGroupRequestBody;
}


export class CreateNetworkSmTargetGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createNetworkSmTargetGroup201ApplicationJsonObject?: Map<string, any>;
}
