import { SpeakeasyBase } from "../../../internal/utils";
export declare class NodesViewOnlyLinksListPathParams extends SpeakeasyBase {
    nodeId: string;
}
export declare class NodesViewOnlyLinksListRequest extends SpeakeasyBase {
    pathParams: NodesViewOnlyLinksListPathParams;
}
export declare class NodesViewOnlyLinksListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
