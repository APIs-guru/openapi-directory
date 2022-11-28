import { SpeakeasyBase } from "../../../internal/utils";
export declare class NodesRegistrationsListPathParams extends SpeakeasyBase {
    nodeId: string;
}
export declare class NodesRegistrationsListRequest extends SpeakeasyBase {
    pathParams: NodesRegistrationsListPathParams;
}
export declare class NodesRegistrationsListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
