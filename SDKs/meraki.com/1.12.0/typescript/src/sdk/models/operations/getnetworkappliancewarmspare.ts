import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkApplianceWarmSparePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkApplianceWarmSpareRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkApplianceWarmSparePathParams;
}


export class GetNetworkApplianceWarmSpareResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkApplianceWarmSpare200ApplicationJsonObject?: Map<string, any>;
}
