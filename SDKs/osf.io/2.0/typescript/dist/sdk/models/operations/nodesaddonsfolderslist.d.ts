import { SpeakeasyBase } from "../../../internal/utils";
export declare class NodesAddonsFoldersListPathParams extends SpeakeasyBase {
    nodeId: string;
    provider: string;
}
export declare class NodesAddonsFoldersListRequest extends SpeakeasyBase {
    pathParams: NodesAddonsFoldersListPathParams;
}
export declare class NodesAddonsFoldersListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
