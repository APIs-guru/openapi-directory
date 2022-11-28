import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkSyslogServersPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class UpdateNetworkSyslogServersRequestBodyServers extends SpeakeasyBase {
    host: string;
    port: number;
    roles: string[];
}
export declare class UpdateNetworkSyslogServersRequestBody extends SpeakeasyBase {
    servers: UpdateNetworkSyslogServersRequestBodyServers[];
}
export declare class UpdateNetworkSyslogServersRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkSyslogServersPathParams;
    request: UpdateNetworkSyslogServersRequestBody;
}
export declare class UpdateNetworkSyslogServersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkSyslogServers200ApplicationJsonObject?: Map<string, any>;
}
