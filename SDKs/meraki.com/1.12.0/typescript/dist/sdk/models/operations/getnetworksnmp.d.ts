import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSnmpPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSnmpRequest extends SpeakeasyBase {
    pathParams: GetNetworkSnmpPathParams;
}
export declare class GetNetworkSnmpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSnmp200ApplicationJsonObject?: Map<string, any>;
}
