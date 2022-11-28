import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkApplianceStaticRoutePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=staticRouteId" })
  staticRouteId: string;
}


export class UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment: string;

  @SpeakeasyMetadata({ data: "json, name=end" })
  end: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start: string;
}


export class UpdateNetworkApplianceStaticRouteRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fixedIpAssignments" })
  fixedIpAssignments?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=gatewayIp" })
  gatewayIp?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=reservedIpRanges", elemType: UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges })
  reservedIpRanges?: UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges[];

  @SpeakeasyMetadata({ data: "json, name=subnet" })
  subnet?: string;
}


export class UpdateNetworkApplianceStaticRouteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkApplianceStaticRoutePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkApplianceStaticRouteRequestBody;
}


export class UpdateNetworkApplianceStaticRouteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkApplianceStaticRoute200ApplicationJsonObject?: Map<string, any>;
}
