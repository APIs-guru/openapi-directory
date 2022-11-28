import { SpeakeasyBase } from "../../../internal/utils";
export declare class RenewOrganizationLicensesSeatsPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class RenewOrganizationLicensesSeatsRequestBody extends SpeakeasyBase {
    licenseIdToRenew: string;
    unusedLicenseId: string;
}
export declare class RenewOrganizationLicensesSeatsRequest extends SpeakeasyBase {
    pathParams: RenewOrganizationLicensesSeatsPathParams;
    request: RenewOrganizationLicensesSeatsRequestBody;
}
export declare class RenewOrganizationLicensesSeatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    renewOrganizationLicensesSeats200ApplicationJsonObject?: Map<string, any>;
}
