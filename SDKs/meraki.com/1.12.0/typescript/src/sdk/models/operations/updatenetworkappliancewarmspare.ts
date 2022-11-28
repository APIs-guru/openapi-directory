import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkApplianceWarmSparePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkApplianceWarmSpareRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=spareSerial" })
  spareSerial?: string;

  @SpeakeasyMetadata({ data: "json, name=uplinkMode" })
  uplinkMode?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualIp1" })
  virtualIp1?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualIp2" })
  virtualIp2?: string;
}


export class UpdateNetworkApplianceWarmSpareRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkApplianceWarmSparePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateNetworkApplianceWarmSpareRequestBody;
}


export class UpdateNetworkApplianceWarmSpareResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkApplianceWarmSpare200ApplicationJsonObject?: Map<string, any>;
}
