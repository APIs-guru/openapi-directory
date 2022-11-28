import { SpeakeasyBase } from "../../../internal/utils";
export declare class NodesReadPathParams extends SpeakeasyBase {
    nodeId: string;
}
export declare class NodesReadRequest extends SpeakeasyBase {
    pathParams: NodesReadPathParams;
}
export declare class NodesReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
