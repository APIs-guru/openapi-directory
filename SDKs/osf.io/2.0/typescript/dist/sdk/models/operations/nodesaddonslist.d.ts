import { SpeakeasyBase } from "../../../internal/utils";
export declare class NodesAddonsListPathParams extends SpeakeasyBase {
    nodeId: string;
}
export declare class NodesAddonsListRequest extends SpeakeasyBase {
    pathParams: NodesAddonsListPathParams;
}
export declare class NodesAddonsListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
