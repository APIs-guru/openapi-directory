import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingUserRolesGetPathParams extends SpeakeasyBase {
    id: string;
    profileId: string;
}
export declare class DfareportingUserRolesGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingUserRolesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingUserRolesGetRequest extends SpeakeasyBase {
    pathParams: DfareportingUserRolesGetPathParams;
    queryParams: DfareportingUserRolesGetQueryParams;
    security: DfareportingUserRolesGetSecurity;
}
export declare class DfareportingUserRolesGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userRole?: shared.UserRole;
}
