import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateOrganizationActionBatchPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class CreateOrganizationActionBatchRequestBodyActions extends SpeakeasyBase {
    body?: Map<string, any>;
    operation: string;
    resource: string;
}
export declare class CreateOrganizationActionBatchRequestBody extends SpeakeasyBase {
    actions: CreateOrganizationActionBatchRequestBodyActions[];
    confirmed?: boolean;
    synchronous?: boolean;
}
export declare class CreateOrganizationActionBatchRequest extends SpeakeasyBase {
    pathParams: CreateOrganizationActionBatchPathParams;
    request: CreateOrganizationActionBatchRequestBody;
}
export declare class CreateOrganizationActionBatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createOrganizationActionBatch201ApplicationJsonObject?: Map<string, any>;
}
