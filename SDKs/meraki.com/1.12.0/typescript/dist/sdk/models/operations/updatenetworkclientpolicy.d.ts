import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkClientPolicyPathParams extends SpeakeasyBase {
    clientId: string;
    networkId: string;
}
export declare class UpdateNetworkClientPolicyRequestBody extends SpeakeasyBase {
    devicePolicy: string;
    groupPolicyId?: string;
}
export declare class UpdateNetworkClientPolicyRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkClientPolicyPathParams;
    request: UpdateNetworkClientPolicyRequestBody;
}
export declare class UpdateNetworkClientPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkClientPolicy200ApplicationJsonObject?: Map<string, any>;
}
