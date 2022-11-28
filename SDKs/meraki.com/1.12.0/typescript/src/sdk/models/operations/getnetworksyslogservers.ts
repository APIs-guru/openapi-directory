import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkSyslogServersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSyslogServersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkSyslogServersPathParams;
}


export class GetNetworkSyslogServersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkSyslogServers200ApplicationJsonObject?: Map<string, any>;
}
