import { SpeakeasyBase } from "../../../internal/utils";
export declare class MoveOrganizationLicensesSeatsPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class MoveOrganizationLicensesSeatsRequestBody extends SpeakeasyBase {
    destOrganizationId: string;
    licenseId: string;
    seatCount: number;
}
export declare class MoveOrganizationLicensesSeatsRequest extends SpeakeasyBase {
    pathParams: MoveOrganizationLicensesSeatsPathParams;
    request: MoveOrganizationLicensesSeatsRequestBody;
}
export declare class MoveOrganizationLicensesSeatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    moveOrganizationLicensesSeats200ApplicationJsonObject?: Map<string, any>;
}
