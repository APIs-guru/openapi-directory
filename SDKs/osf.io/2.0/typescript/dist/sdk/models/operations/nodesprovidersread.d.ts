import { SpeakeasyBase } from "../../../internal/utils";
export declare class NodesProvidersReadPathParams extends SpeakeasyBase {
    nodeId: string;
    provider: string;
}
export declare class NodesProvidersReadRequest extends SpeakeasyBase {
    pathParams: NodesProvidersReadPathParams;
}
export declare class NodesProvidersReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
