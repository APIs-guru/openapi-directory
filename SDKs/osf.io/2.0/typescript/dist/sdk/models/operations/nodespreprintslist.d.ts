import { SpeakeasyBase } from "../../../internal/utils";
export declare class NodesPreprintsListPathParams extends SpeakeasyBase {
    nodeId: string;
}
export declare class NodesPreprintsListRequest extends SpeakeasyBase {
    pathParams: NodesPreprintsListPathParams;
}
export declare class NodesPreprintsListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
