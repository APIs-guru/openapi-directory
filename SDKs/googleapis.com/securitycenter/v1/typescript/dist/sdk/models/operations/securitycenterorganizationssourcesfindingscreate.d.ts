import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecuritycenterOrganizationsSourcesFindingsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SecuritycenterOrganizationsSourcesFindingsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    findingId?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SecuritycenterOrganizationsSourcesFindingsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecuritycenterOrganizationsSourcesFindingsCreateRequest extends SpeakeasyBase {
    pathParams: SecuritycenterOrganizationsSourcesFindingsCreatePathParams;
    queryParams: SecuritycenterOrganizationsSourcesFindingsCreateQueryParams;
    request?: shared.FindingInput;
    security: SecuritycenterOrganizationsSourcesFindingsCreateSecurity;
}
export declare class SecuritycenterOrganizationsSourcesFindingsCreateResponse extends SpeakeasyBase {
    contentType: string;
    finding?: shared.Finding;
    statusCode: number;
}
