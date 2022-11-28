import { SpeakeasyBase } from "../../../internal/utils";
export declare class NodesCitationListPathParams extends SpeakeasyBase {
    nodeId: string;
}
export declare class NodesCitationListRequest extends SpeakeasyBase {
    pathParams: NodesCitationListPathParams;
}
export declare class NodesCitationListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
