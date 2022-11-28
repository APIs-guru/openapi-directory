import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkSwitchStpPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class UpdateNetworkSwitchStpRequestBodyStpBridgePriority extends SpeakeasyBase {
    stacks?: string[];
    stpPriority: number;
    switchProfiles?: string[];
    switches?: string[];
}
export declare class UpdateNetworkSwitchStpRequestBody extends SpeakeasyBase {
    rstpEnabled?: boolean;
    stpBridgePriority?: UpdateNetworkSwitchStpRequestBodyStpBridgePriority[];
}
export declare class UpdateNetworkSwitchStpRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkSwitchStpPathParams;
    request?: UpdateNetworkSwitchStpRequestBody;
}
export declare class UpdateNetworkSwitchStpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkSwitchStp200ApplicationJsonObject?: Map<string, any>;
}
