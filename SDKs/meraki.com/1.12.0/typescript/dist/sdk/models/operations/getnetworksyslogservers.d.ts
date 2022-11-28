import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSyslogServersPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSyslogServersRequest extends SpeakeasyBase {
    pathParams: GetNetworkSyslogServersPathParams;
}
export declare class GetNetworkSyslogServersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSyslogServers200ApplicationJsonObject?: Map<string, any>;
}
