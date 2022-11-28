import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkSyslogServersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkSyslogServersRequestBodyServers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=host" })
  host: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port: number;

  @SpeakeasyMetadata({ data: "json, name=roles" })
  roles: string[];
}


export class UpdateNetworkSyslogServersRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=servers", elemType: UpdateNetworkSyslogServersRequestBodyServers })
  servers: UpdateNetworkSyslogServersRequestBodyServers[];
}


export class UpdateNetworkSyslogServersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkSyslogServersPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateNetworkSyslogServersRequestBody;
}


export class UpdateNetworkSyslogServersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkSyslogServers200ApplicationJsonObject?: Map<string, any>;
}
