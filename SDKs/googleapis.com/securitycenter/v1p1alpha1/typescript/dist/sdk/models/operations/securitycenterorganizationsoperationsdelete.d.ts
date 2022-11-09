import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SecuritycenterOrganizationsOperationsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class SecuritycenterOrganizationsOperationsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SecuritycenterOrganizationsOperationsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecuritycenterOrganizationsOperationsDeleteRequest extends SpeakeasyBase {
    pathParams: SecuritycenterOrganizationsOperationsDeletePathParams;
    queryParams: SecuritycenterOrganizationsOperationsDeleteQueryParams;
    security: SecuritycenterOrganizationsOperationsDeleteSecurity;
}
export declare class SecuritycenterOrganizationsOperationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
