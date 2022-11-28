import { SpeakeasyBase } from "../../../internal/utils";
export declare class AssignOrganizationLicensesSeatsPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class AssignOrganizationLicensesSeatsRequestBody extends SpeakeasyBase {
    licenseId: string;
    networkId: string;
    seatCount: number;
}
export declare class AssignOrganizationLicensesSeatsRequest extends SpeakeasyBase {
    pathParams: AssignOrganizationLicensesSeatsPathParams;
    request: AssignOrganizationLicensesSeatsRequestBody;
}
export declare class AssignOrganizationLicensesSeatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    assignOrganizationLicensesSeats200ApplicationJsonObject?: Map<string, any>;
}
