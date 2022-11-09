import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateDeviceCellularGatewayLanPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class UpdateDeviceCellularGatewayLanRequestBodyFixedIpAssignments extends SpeakeasyBase {
  @Metadata({ data: "json, name=ip" })
  ip: string;

  @Metadata({ data: "json, name=mac" })
  mac: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges extends SpeakeasyBase {
  @Metadata({ data: "json, name=comment" })
  comment: string;

  @Metadata({ data: "json, name=end" })
  end: string;

  @Metadata({ data: "json, name=start" })
  start: string;
}


export class UpdateDeviceCellularGatewayLanRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=fixedIpAssignments", elemType: operations.UpdateDeviceCellularGatewayLanRequestBodyFixedIpAssignments })
  fixedIpAssignments?: UpdateDeviceCellularGatewayLanRequestBodyFixedIpAssignments[];

  @Metadata({ data: "json, name=reservedIpRanges", elemType: operations.UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges })
  reservedIpRanges?: UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges[];
}


export class UpdateDeviceCellularGatewayLanRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDeviceCellularGatewayLanPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateDeviceCellularGatewayLanRequestBody;
}


export class UpdateDeviceCellularGatewayLanResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateDeviceCellularGatewayLan200ApplicationJsonObject?: Map<string, any>;
}
