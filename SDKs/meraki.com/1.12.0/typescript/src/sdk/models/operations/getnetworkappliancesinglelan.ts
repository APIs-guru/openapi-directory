import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkApplianceSingleLanPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkApplianceSingleLanRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkApplianceSingleLanPathParams;
}


export class GetNetworkApplianceSingleLanResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkApplianceSingleLan200ApplicationJsonObject?: Map<string, any>;
}
