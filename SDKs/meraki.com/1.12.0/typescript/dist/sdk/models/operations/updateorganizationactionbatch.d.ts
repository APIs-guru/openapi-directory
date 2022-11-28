import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateOrganizationActionBatchPathParams extends SpeakeasyBase {
    actionBatchId: string;
    organizationId: string;
}
export declare class UpdateOrganizationActionBatchRequestBody extends SpeakeasyBase {
    confirmed?: boolean;
    synchronous?: boolean;
}
export declare class UpdateOrganizationActionBatchRequest extends SpeakeasyBase {
    pathParams: UpdateOrganizationActionBatchPathParams;
    request?: UpdateOrganizationActionBatchRequestBody;
}
export declare class UpdateOrganizationActionBatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateOrganizationActionBatch200ApplicationJsonObject?: Map<string, any>;
}
