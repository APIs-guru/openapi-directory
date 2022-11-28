import { SpeakeasyBase } from "../../../internal/utils";
export declare class NodesNodeAddonUpdatePathParams extends SpeakeasyBase {
    nodeId: string;
    provider: string;
}
export declare class NodesNodeAddonUpdateRequest extends SpeakeasyBase {
    pathParams: NodesNodeAddonUpdatePathParams;
    request: Map<string, any>;
}
export declare class NodesNodeAddonUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
