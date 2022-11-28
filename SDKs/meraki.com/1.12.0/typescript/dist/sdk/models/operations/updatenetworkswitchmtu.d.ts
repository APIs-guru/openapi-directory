import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkSwitchMtuPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class UpdateNetworkSwitchMtuRequestBodyOverrides extends SpeakeasyBase {
    mtuSize: number;
    switchProfiles?: string[];
    switches?: string[];
}
export declare class UpdateNetworkSwitchMtuRequestBody extends SpeakeasyBase {
    defaultMtuSize?: number;
    overrides?: UpdateNetworkSwitchMtuRequestBodyOverrides[];
}
export declare class UpdateNetworkSwitchMtuRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkSwitchMtuPathParams;
    request?: UpdateNetworkSwitchMtuRequestBody;
}
export declare class UpdateNetworkSwitchMtuResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkSwitchMtu200ApplicationJsonObject?: Map<string, any>;
}
