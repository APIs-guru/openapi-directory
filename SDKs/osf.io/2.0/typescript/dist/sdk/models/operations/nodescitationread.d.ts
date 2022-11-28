import { SpeakeasyBase } from "../../../internal/utils";
export declare class NodesCitationReadPathParams extends SpeakeasyBase {
    nodeId: string;
    styleId: string;
}
export declare class NodesCitationReadRequest extends SpeakeasyBase {
    pathParams: NodesCitationReadPathParams;
}
export declare class NodesCitationReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
