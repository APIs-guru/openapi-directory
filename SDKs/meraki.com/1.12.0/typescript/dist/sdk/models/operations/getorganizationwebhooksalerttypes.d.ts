import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationWebhooksAlertTypesPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationWebhooksAlertTypesRequest extends SpeakeasyBase {
    pathParams: GetOrganizationWebhooksAlertTypesPathParams;
}
export declare class GetOrganizationWebhooksAlertTypesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getOrganizationWebhooksAlertTypes200ApplicationJsonObject?: Map<string, any>;
}
