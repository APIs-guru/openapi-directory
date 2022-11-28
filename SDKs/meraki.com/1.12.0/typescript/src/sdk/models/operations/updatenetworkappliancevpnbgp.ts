import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkApplianceVpnBgpPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkApplianceVpnBgpRequestBodyNeighbors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowTransit" })
  allowTransit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ebgpHoldTimer" })
  ebgpHoldTimer: number;

  @SpeakeasyMetadata({ data: "json, name=ebgpMultihop" })
  ebgpMultihop: number;

  @SpeakeasyMetadata({ data: "json, name=ip" })
  ip: string;

  @SpeakeasyMetadata({ data: "json, name=receiveLimit" })
  receiveLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=remoteAsNumber" })
  remoteAsNumber: number;
}


export class UpdateNetworkApplianceVpnBgpRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asNumber" })
  asNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=ibgpHoldTimer" })
  ibgpHoldTimer?: number;

  @SpeakeasyMetadata({ data: "json, name=neighbors", elemType: UpdateNetworkApplianceVpnBgpRequestBodyNeighbors })
  neighbors?: UpdateNetworkApplianceVpnBgpRequestBodyNeighbors[];
}


export class UpdateNetworkApplianceVpnBgpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkApplianceVpnBgpPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateNetworkApplianceVpnBgpRequestBody;
}


export class UpdateNetworkApplianceVpnBgpResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkApplianceVpnBgp200ApplicationJsonObject?: Map<string, any>;
}
