import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SwapNetworkApplianceWarmSparePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class SwapNetworkApplianceWarmSpareRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SwapNetworkApplianceWarmSparePathParams;
}


export class SwapNetworkApplianceWarmSpareResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  swapNetworkApplianceWarmSpare200ApplicationJsonObject?: Map<string, any>;
}
