import { SpeakeasyBase } from "../../../internal/utils";
export declare class NodesFilesReadPathParams extends SpeakeasyBase {
    nodeId: string;
    path: string;
    provider: string;
}
export declare class NodesFilesReadRequest extends SpeakeasyBase {
    pathParams: NodesFilesReadPathParams;
}
export declare class NodesFilesReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
