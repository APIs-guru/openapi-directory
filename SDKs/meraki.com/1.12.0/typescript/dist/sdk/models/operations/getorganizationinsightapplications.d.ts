import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationInsightApplicationsPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationInsightApplicationsRequest extends SpeakeasyBase {
    pathParams: GetOrganizationInsightApplicationsPathParams;
}
export declare class GetOrganizationInsightApplicationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getOrganizationInsightApplications200ApplicationJsonObject?: Map<string, any>;
}
