import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkSplashLoginAttemptsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSplashLoginAttemptsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=loginIdentifier" })
  loginIdentifier?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ssidNumber" })
  ssidNumber?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timespan" })
  timespan?: number;
}


export class GetNetworkSplashLoginAttemptsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkSplashLoginAttemptsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetNetworkSplashLoginAttemptsQueryParams;
}


export class GetNetworkSplashLoginAttemptsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkSplashLoginAttempts200ApplicationJsonObject?: Map<string, any>;
}
