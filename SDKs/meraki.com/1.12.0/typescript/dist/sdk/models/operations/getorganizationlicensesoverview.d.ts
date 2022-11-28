import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationLicensesOverviewPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationLicensesOverviewRequest extends SpeakeasyBase {
    pathParams: GetOrganizationLicensesOverviewPathParams;
}
export declare class GetOrganizationLicensesOverviewResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getOrganizationLicensesOverview200ApplicationJsonObject?: Map<string, any>;
}
