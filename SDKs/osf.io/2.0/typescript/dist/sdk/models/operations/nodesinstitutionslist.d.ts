import { SpeakeasyBase } from "../../../internal/utils";
export declare class NodesInstitutionsListPathParams extends SpeakeasyBase {
    nodeId: string;
}
export declare class NodesInstitutionsListRequest extends SpeakeasyBase {
    pathParams: NodesInstitutionsListPathParams;
}
export declare class NodesInstitutionsListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
