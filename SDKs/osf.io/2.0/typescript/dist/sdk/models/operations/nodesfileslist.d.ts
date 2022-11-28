import { SpeakeasyBase } from "../../../internal/utils";
export declare class NodesFilesListPathParams extends SpeakeasyBase {
    nodeId: string;
    provider: string;
}
export declare class NodesFilesListRequest extends SpeakeasyBase {
    pathParams: NodesFilesListPathParams;
}
export declare class NodesFilesListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
