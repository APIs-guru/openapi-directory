import { SpeakeasyBase } from "../../../internal/utils";
export declare class NodesForksListPathParams extends SpeakeasyBase {
    nodeId: string;
}
export declare class NodesForksListRequest extends SpeakeasyBase {
    pathParams: NodesForksListPathParams;
}
export declare class NodesForksListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
