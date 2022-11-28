import { SpeakeasyBase } from "../../../internal/utils";
export declare class NodesProvidersListPathParams extends SpeakeasyBase {
    nodeId: string;
}
export declare class NodesProvidersListRequest extends SpeakeasyBase {
    pathParams: NodesProvidersListPathParams;
}
export declare class NodesProvidersListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
