import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationActionBatchesPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare enum GetOrganizationActionBatchesStatusEnum {
    Pending = "pending",
    Completed = "completed",
    Failed = "failed"
}
export declare class GetOrganizationActionBatchesQueryParams extends SpeakeasyBase {
    status?: GetOrganizationActionBatchesStatusEnum;
}
export declare class GetOrganizationActionBatchesRequest extends SpeakeasyBase {
    pathParams: GetOrganizationActionBatchesPathParams;
    queryParams: GetOrganizationActionBatchesQueryParams;
}
export declare class GetOrganizationActionBatchesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getOrganizationActionBatches200ApplicationJsonObject?: Map<string, any>;
}
