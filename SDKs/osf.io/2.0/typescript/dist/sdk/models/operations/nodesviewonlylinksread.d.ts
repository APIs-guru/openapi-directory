import { SpeakeasyBase } from "../../../internal/utils";
export declare class NodesViewOnlyLinksReadPathParams extends SpeakeasyBase {
    linkId: string;
    nodeId: string;
}
export declare class NodesViewOnlyLinksReadRequest extends SpeakeasyBase {
    pathParams: NodesViewOnlyLinksReadPathParams;
}
export declare class NodesViewOnlyLinksReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
