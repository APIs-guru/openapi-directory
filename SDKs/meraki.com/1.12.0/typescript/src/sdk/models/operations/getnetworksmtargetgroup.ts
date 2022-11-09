import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSmTargetGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=targetGroupId" })
  targetGroupId: string;
}


export class GetNetworkSmTargetGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=withDetails" })
  withDetails?: boolean;
}


export class GetNetworkSmTargetGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSmTargetGroupPathParams;

  @Metadata()
  queryParams: GetNetworkSmTargetGroupQueryParams;
}


export class GetNetworkSmTargetGroupResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSmTargetGroup200ApplicationJsonObject?: Map<string, any>;
}
