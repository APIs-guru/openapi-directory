import { SpeakeasyBase } from "../../../internal/utils";
export declare class NodesCommentsListPathParams extends SpeakeasyBase {
    nodeId: string;
}
export declare class NodesCommentsListRequest extends SpeakeasyBase {
    pathParams: NodesCommentsListPathParams;
}
export declare class NodesCommentsListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
