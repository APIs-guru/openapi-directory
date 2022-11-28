import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationActionBatchPathParams extends SpeakeasyBase {
    actionBatchId: string;
    organizationId: string;
}
export declare class GetOrganizationActionBatchRequest extends SpeakeasyBase {
    pathParams: GetOrganizationActionBatchPathParams;
}
export declare class GetOrganizationActionBatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getOrganizationActionBatch200ApplicationJsonObject?: Map<string, any>;
}
