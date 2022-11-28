import { SpeakeasyBase } from "../../../internal/utils";
export declare class NodesDraftRegistrationsReadPathParams extends SpeakeasyBase {
    draftId: string;
    nodeId: string;
}
export declare class NodesDraftRegistrationsReadRequest extends SpeakeasyBase {
    pathParams: NodesDraftRegistrationsReadPathParams;
}
export declare class NodesDraftRegistrationsReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
