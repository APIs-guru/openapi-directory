import { SpeakeasyBase } from "../../../internal/utils";
export declare class NodesContributorsListPathParams extends SpeakeasyBase {
    nodeId: string;
}
export declare class NodesContributorsListRequest extends SpeakeasyBase {
    pathParams: NodesContributorsListPathParams;
}
export declare class NodesContributorsListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
