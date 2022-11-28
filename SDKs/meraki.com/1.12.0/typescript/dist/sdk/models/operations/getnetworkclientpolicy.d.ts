import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkClientPolicyPathParams extends SpeakeasyBase {
    clientId: string;
    networkId: string;
}
export declare class GetNetworkClientPolicyRequest extends SpeakeasyBase {
    pathParams: GetNetworkClientPolicyPathParams;
}
export declare class GetNetworkClientPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkClientPolicy200ApplicationJsonObject?: Map<string, any>;
}
