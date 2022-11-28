import { SpeakeasyBase } from "../../../internal/utils";
export declare class NodesWikisListPathParams extends SpeakeasyBase {
    nodeId: string;
}
export declare class NodesWikisListRequest extends SpeakeasyBase {
    pathParams: NodesWikisListPathParams;
}
export declare class NodesWikisListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
