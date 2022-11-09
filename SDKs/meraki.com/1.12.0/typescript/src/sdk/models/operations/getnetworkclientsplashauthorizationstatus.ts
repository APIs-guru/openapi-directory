import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkClientSplashAuthorizationStatusPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkClientSplashAuthorizationStatusRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkClientSplashAuthorizationStatusPathParams;
}


export class GetNetworkClientSplashAuthorizationStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkClientSplashAuthorizationStatus200ApplicationJsonObject?: Map<string, any>;
}
