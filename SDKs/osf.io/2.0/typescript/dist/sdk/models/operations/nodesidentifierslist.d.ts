import { SpeakeasyBase } from "../../../internal/utils";
export declare class NodesIdentifiersListPathParams extends SpeakeasyBase {
    nodeId: string;
}
export declare class NodesIdentifiersListRequest extends SpeakeasyBase {
    pathParams: NodesIdentifiersListPathParams;
}
export declare class NodesIdentifiersListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
