import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkApplianceWarmSparePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkApplianceWarmSpareRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;

  @Metadata({ data: "json, name=spareSerial" })
  spareSerial?: string;

  @Metadata({ data: "json, name=uplinkMode" })
  uplinkMode?: string;

  @Metadata({ data: "json, name=virtualIp1" })
  virtualIp1?: string;

  @Metadata({ data: "json, name=virtualIp2" })
  virtualIp2?: string;
}


export class UpdateNetworkApplianceWarmSpareRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkApplianceWarmSparePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateNetworkApplianceWarmSpareRequestBody;
}


export class UpdateNetworkApplianceWarmSpareResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkApplianceWarmSpare200ApplicationJsonObject?: Map<string, any>;
}
