import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkAppliancePortPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=portId" })
  portId: string;
}


export class UpdateNetworkAppliancePortRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessPolicy" })
  accessPolicy?: string;

  @SpeakeasyMetadata({ data: "json, name=allowedVlans" })
  allowedVlans?: string;

  @SpeakeasyMetadata({ data: "json, name=dropUntaggedTraffic" })
  dropUntaggedTraffic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=vlan" })
  vlan?: number;
}


export class UpdateNetworkAppliancePortRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkAppliancePortPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkAppliancePortRequestBody;
}


export class UpdateNetworkAppliancePortResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkAppliancePort200ApplicationJsonObject?: Map<string, any>;
}
