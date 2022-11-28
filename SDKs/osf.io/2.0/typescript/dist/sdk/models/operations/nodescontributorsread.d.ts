import { SpeakeasyBase } from "../../../internal/utils";
export declare class NodesContributorsReadPathParams extends SpeakeasyBase {
    nodeId: string;
    userId: string;
}
export declare class NodesContributorsReadRequest extends SpeakeasyBase {
    pathParams: NodesContributorsReadPathParams;
}
export declare class NodesContributorsReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
