import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateNetworkSwitchStackPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class CreateNetworkSwitchStackRequestBody extends SpeakeasyBase {
    name: string;
    serials: string[];
}
export declare class CreateNetworkSwitchStackRequest extends SpeakeasyBase {
    pathParams: CreateNetworkSwitchStackPathParams;
    request: CreateNetworkSwitchStackRequestBody;
}
export declare class CreateNetworkSwitchStackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createNetworkSwitchStack201ApplicationJsonObject?: Map<string, any>;
}
