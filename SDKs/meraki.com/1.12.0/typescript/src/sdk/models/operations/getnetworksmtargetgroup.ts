import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkSmTargetGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=targetGroupId" })
  targetGroupId: string;
}


export class GetNetworkSmTargetGroupQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=withDetails" })
  withDetails?: boolean;
}


export class GetNetworkSmTargetGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkSmTargetGroupPathParams;

  @SpeakeasyMetadata()
  queryParams: GetNetworkSmTargetGroupQueryParams;
}


export class GetNetworkSmTargetGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkSmTargetGroup200ApplicationJsonObject?: Map<string, any>;
}
