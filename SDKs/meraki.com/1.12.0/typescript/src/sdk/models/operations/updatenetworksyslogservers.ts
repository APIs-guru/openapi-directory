import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkSyslogServersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class UpdateNetworkSyslogServersRequestBodyServers extends SpeakeasyBase {
  @Metadata({ data: "json, name=host" })
  host: string;

  @Metadata({ data: "json, name=port" })
  port: number;

  @Metadata({ data: "json, name=roles" })
  roles: string[];
}


export class UpdateNetworkSyslogServersRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=servers", elemType: operations.UpdateNetworkSyslogServersRequestBodyServers })
  servers: UpdateNetworkSyslogServersRequestBodyServers[];
}


export class UpdateNetworkSyslogServersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkSyslogServersPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateNetworkSyslogServersRequestBody;
}


export class UpdateNetworkSyslogServersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkSyslogServers200ApplicationJsonObject?: Map<string, any>;
}
