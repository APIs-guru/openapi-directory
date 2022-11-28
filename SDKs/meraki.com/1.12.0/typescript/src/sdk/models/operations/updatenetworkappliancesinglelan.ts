import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkApplianceSingleLanPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkApplianceSingleLanRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applianceIp" })
  applianceIp?: string;

  @SpeakeasyMetadata({ data: "json, name=subnet" })
  subnet?: string;
}


export class UpdateNetworkApplianceSingleLanRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkApplianceSingleLanPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkApplianceSingleLanRequestBody;
}


export class UpdateNetworkApplianceSingleLanResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkApplianceSingleLan200ApplicationJsonObject?: Map<string, any>;
}
