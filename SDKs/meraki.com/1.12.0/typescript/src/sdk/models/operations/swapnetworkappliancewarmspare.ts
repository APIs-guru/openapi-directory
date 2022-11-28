import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SwapNetworkApplianceWarmSparePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class SwapNetworkApplianceWarmSpareRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SwapNetworkApplianceWarmSparePathParams;
}


export class SwapNetworkApplianceWarmSpareResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  swapNetworkApplianceWarmSpare200ApplicationJsonObject?: Map<string, any>;
}
