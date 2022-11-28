import { SpeakeasyBase } from "../../../internal/utils";
export declare class NodesPartialUpdatePathParams extends SpeakeasyBase {
    nodeId: string;
}
export declare class NodesPartialUpdateRequest extends SpeakeasyBase {
    pathParams: NodesPartialUpdatePathParams;
    request: Map<string, any>;
}
export declare class NodesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
