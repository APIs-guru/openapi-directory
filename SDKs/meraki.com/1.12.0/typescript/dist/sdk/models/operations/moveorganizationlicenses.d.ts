import { SpeakeasyBase } from "../../../internal/utils";
export declare class MoveOrganizationLicensesPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class MoveOrganizationLicensesRequestBody extends SpeakeasyBase {
    destOrganizationId: string;
    licenseIds: string[];
}
export declare class MoveOrganizationLicensesRequest extends SpeakeasyBase {
    pathParams: MoveOrganizationLicensesPathParams;
    request: MoveOrganizationLicensesRequestBody;
}
export declare class MoveOrganizationLicensesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    moveOrganizationLicenses200ApplicationJsonObject?: Map<string, any>;
}
