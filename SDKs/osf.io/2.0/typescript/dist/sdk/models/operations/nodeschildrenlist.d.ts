import { SpeakeasyBase } from "../../../internal/utils";
export declare class NodesChildrenListPathParams extends SpeakeasyBase {
    nodeId: string;
}
export declare class NodesChildrenListRequest extends SpeakeasyBase {
    pathParams: NodesChildrenListPathParams;
}
export declare class NodesChildrenListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
