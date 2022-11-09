import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkApplianceStaticRoutePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=staticRouteId" })
  staticRouteId: string;
}


export class UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges extends SpeakeasyBase {
  @Metadata({ data: "json, name=comment" })
  comment: string;

  @Metadata({ data: "json, name=end" })
  end: string;

  @Metadata({ data: "json, name=start" })
  start: string;
}


export class UpdateNetworkApplianceStaticRouteRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=fixedIpAssignments" })
  fixedIpAssignments?: Map<string, any>;

  @Metadata({ data: "json, name=gatewayIp" })
  gatewayIp?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=reservedIpRanges", elemType: operations.UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges })
  reservedIpRanges?: UpdateNetworkApplianceStaticRouteRequestBodyReservedIpRanges[];

  @Metadata({ data: "json, name=subnet" })
  subnet?: string;
}


export class UpdateNetworkApplianceStaticRouteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkApplianceStaticRoutePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkApplianceStaticRouteRequestBody;
}


export class UpdateNetworkApplianceStaticRouteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkApplianceStaticRoute200ApplicationJsonObject?: Map<string, any>;
}
