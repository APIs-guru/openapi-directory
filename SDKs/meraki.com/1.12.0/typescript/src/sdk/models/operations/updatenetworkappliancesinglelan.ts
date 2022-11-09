import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkApplianceSingleLanPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkApplianceSingleLanRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=applianceIp" })
  applianceIp?: string;

  @Metadata({ data: "json, name=subnet" })
  subnet?: string;
}


export class UpdateNetworkApplianceSingleLanRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkApplianceSingleLanPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkApplianceSingleLanRequestBody;
}


export class UpdateNetworkApplianceSingleLanResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkApplianceSingleLan200ApplicationJsonObject?: Map<string, any>;
}
