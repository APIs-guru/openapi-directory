import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationWebhooksLogsPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationWebhooksLogsQueryParams extends SpeakeasyBase {
    endingBefore?: string;
    perPage?: number;
    startingAfter?: string;
    t0?: string;
    t1?: string;
    timespan?: number;
    url?: string;
}
export declare class GetOrganizationWebhooksLogsRequest extends SpeakeasyBase {
    pathParams: GetOrganizationWebhooksLogsPathParams;
    queryParams: GetOrganizationWebhooksLogsQueryParams;
}
export declare class GetOrganizationWebhooksLogsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getOrganizationWebhooksLogs200ApplicationJsonObject?: Map<string, any>;
}
