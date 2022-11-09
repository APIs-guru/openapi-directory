import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSplashLoginAttemptsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSplashLoginAttemptsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=loginIdentifier" })
  loginIdentifier?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ssidNumber" })
  ssidNumber?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timespan" })
  timespan?: number;
}


export class GetNetworkSplashLoginAttemptsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSplashLoginAttemptsPathParams;

  @Metadata()
  queryParams: GetNetworkSplashLoginAttemptsQueryParams;
}


export class GetNetworkSplashLoginAttemptsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSplashLoginAttempts200ApplicationJsonObject?: Map<string, any>;
}
