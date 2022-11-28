import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateDeviceCellularGatewayLanPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class UpdateDeviceCellularGatewayLanRequestBodyFixedIpAssignments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;

  @SpeakeasyMetadata({ data: "json, name=mac" })
  mac: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment: string;

  @SpeakeasyMetadata({ data: "json, name=end" })
  end: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start: string;
}


export class UpdateDeviceCellularGatewayLanRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fixedIpAssignments", elemType: UpdateDeviceCellularGatewayLanRequestBodyFixedIpAssignments })
  fixedIpAssignments?: UpdateDeviceCellularGatewayLanRequestBodyFixedIpAssignments[];

  @SpeakeasyMetadata({ data: "json, name=reservedIpRanges", elemType: UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges })
  reservedIpRanges?: UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges[];
}


export class UpdateDeviceCellularGatewayLanRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateDeviceCellularGatewayLanPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateDeviceCellularGatewayLanRequestBody;
}


export class UpdateDeviceCellularGatewayLanResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateDeviceCellularGatewayLan200ApplicationJsonObject?: Map<string, any>;
}
