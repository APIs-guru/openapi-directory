import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSyslogServersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSyslogServersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSyslogServersPathParams;
}


export class GetNetworkSyslogServersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSyslogServers200ApplicationJsonObject?: Map<string, any>;
}
