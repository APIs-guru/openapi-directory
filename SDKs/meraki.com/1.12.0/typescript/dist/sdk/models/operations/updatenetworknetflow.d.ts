import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkNetflowPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class UpdateNetworkNetflowRequestBody extends SpeakeasyBase {
    collectorIp?: string;
    collectorPort?: number;
    etaDstPort?: number;
    etaEnabled?: boolean;
    reportingEnabled?: boolean;
}
export declare class UpdateNetworkNetflowRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkNetflowPathParams;
    request?: UpdateNetworkNetflowRequestBody;
}
export declare class UpdateNetworkNetflowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkNetflow200ApplicationJsonObject?: Map<string, any>;
}
