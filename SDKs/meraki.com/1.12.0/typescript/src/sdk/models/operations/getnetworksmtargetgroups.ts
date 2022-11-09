import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSmTargetGroupsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSmTargetGroupsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=withDetails" })
  withDetails?: boolean;
}


export class GetNetworkSmTargetGroupsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSmTargetGroupsPathParams;

  @Metadata()
  queryParams: GetNetworkSmTargetGroupsQueryParams;
}


export class GetNetworkSmTargetGroupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSmTargetGroups200ApplicationJsonObject?: Map<string, any>;
}
