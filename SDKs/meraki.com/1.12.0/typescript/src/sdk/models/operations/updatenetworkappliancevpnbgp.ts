import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkApplianceVpnBgpPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkApplianceVpnBgpRequestBodyNeighbors extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowTransit" })
  allowTransit?: boolean;

  @Metadata({ data: "json, name=ebgpHoldTimer" })
  ebgpHoldTimer: number;

  @Metadata({ data: "json, name=ebgpMultihop" })
  ebgpMultihop: number;

  @Metadata({ data: "json, name=ip" })
  ip: string;

  @Metadata({ data: "json, name=receiveLimit" })
  receiveLimit?: number;

  @Metadata({ data: "json, name=remoteAsNumber" })
  remoteAsNumber: number;
}


export class UpdateNetworkApplianceVpnBgpRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=asNumber" })
  asNumber?: number;

  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;

  @Metadata({ data: "json, name=ibgpHoldTimer" })
  ibgpHoldTimer?: number;

  @Metadata({ data: "json, name=neighbors", elemType: operations.UpdateNetworkApplianceVpnBgpRequestBodyNeighbors })
  neighbors?: UpdateNetworkApplianceVpnBgpRequestBodyNeighbors[];
}


export class UpdateNetworkApplianceVpnBgpRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkApplianceVpnBgpPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateNetworkApplianceVpnBgpRequestBody;
}


export class UpdateNetworkApplianceVpnBgpResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkApplianceVpnBgp200ApplicationJsonObject?: Map<string, any>;
}
