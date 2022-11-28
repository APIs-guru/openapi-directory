import { SpeakeasyBase } from "../../../internal/utils";
export declare class SplitNetworkPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class SplitNetworkRequest extends SpeakeasyBase {
    pathParams: SplitNetworkPathParams;
}
export declare class SplitNetworkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    splitNetwork200ApplicationJsonObject?: Map<string, any>;
}
