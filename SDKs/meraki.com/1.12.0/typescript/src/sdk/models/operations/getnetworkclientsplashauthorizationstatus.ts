import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkClientSplashAuthorizationStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkClientSplashAuthorizationStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkClientSplashAuthorizationStatusPathParams;
}


export class GetNetworkClientSplashAuthorizationStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkClientSplashAuthorizationStatus200ApplicationJsonObject?: Map<string, any>;
}
