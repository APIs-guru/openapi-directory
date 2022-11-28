import { SpeakeasyBase } from "../../../internal/utils";
export declare class NodesLinkedNodesListPathParams extends SpeakeasyBase {
    nodeId: string;
}
export declare class NodesLinkedNodesListRequest extends SpeakeasyBase {
    pathParams: NodesLinkedNodesListPathParams;
}
export declare class NodesLinkedNodesListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
