import { SpeakeasyBase } from "../../../internal/utils";
export declare class NodesLogsListPathParams extends SpeakeasyBase {
    nodeId: string;
}
export declare class NodesLogsListRequest extends SpeakeasyBase {
    pathParams: NodesLogsListPathParams;
}
export declare class NodesLogsListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
