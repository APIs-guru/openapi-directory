import { SpeakeasyBase } from "../../../internal/utils";
export declare class ClaimIntoOrganizationPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare enum ClaimIntoOrganizationRequestBodyLicensesModeEnum {
    AddDevices = "addDevices",
    Renew = "renew"
}
export declare class ClaimIntoOrganizationRequestBodyLicenses extends SpeakeasyBase {
    key: string;
    mode?: ClaimIntoOrganizationRequestBodyLicensesModeEnum;
}
export declare class ClaimIntoOrganizationRequestBody extends SpeakeasyBase {
    licenses?: ClaimIntoOrganizationRequestBodyLicenses[];
    orders?: string[];
    serials?: string[];
}
export declare class ClaimIntoOrganizationRequest extends SpeakeasyBase {
    pathParams: ClaimIntoOrganizationPathParams;
    request?: ClaimIntoOrganizationRequestBody;
}
export declare class ClaimIntoOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    claimIntoOrganization200ApplicationJsonObject?: Map<string, any>;
}
