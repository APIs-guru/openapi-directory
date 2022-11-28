import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkSmTargetGroupsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSmTargetGroupsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=withDetails" })
  withDetails?: boolean;
}


export class GetNetworkSmTargetGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkSmTargetGroupsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetNetworkSmTargetGroupsQueryParams;
}


export class GetNetworkSmTargetGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkSmTargetGroups200ApplicationJsonObject?: Map<string, any>;
}
