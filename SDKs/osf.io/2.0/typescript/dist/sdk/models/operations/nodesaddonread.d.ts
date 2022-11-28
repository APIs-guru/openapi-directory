import { SpeakeasyBase } from "../../../internal/utils";
export declare class NodesAddonReadPathParams extends SpeakeasyBase {
    nodeId: string;
    provider: string;
}
export declare class NodesAddonReadRequest extends SpeakeasyBase {
    pathParams: NodesAddonReadPathParams;
}
export declare class NodesAddonReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
