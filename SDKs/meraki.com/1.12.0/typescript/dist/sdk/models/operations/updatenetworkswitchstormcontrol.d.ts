import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkSwitchStormControlPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class UpdateNetworkSwitchStormControlRequestBody extends SpeakeasyBase {
    broadcastThreshold?: number;
    multicastThreshold?: number;
    unknownUnicastThreshold?: number;
}
export declare class UpdateNetworkSwitchStormControlRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkSwitchStormControlPathParams;
    request?: UpdateNetworkSwitchStormControlRequestBody;
}
export declare class UpdateNetworkSwitchStormControlResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkSwitchStormControl200ApplicationJsonObject?: Map<string, any>;
}
