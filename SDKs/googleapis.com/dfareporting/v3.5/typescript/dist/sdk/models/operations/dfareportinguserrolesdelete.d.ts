import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingUserRolesDeletePathParams extends SpeakeasyBase {
    id: string;
    profileId: string;
}
export declare class DfareportingUserRolesDeleteQueryParams extends SpeakeasyBase {
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
export declare class DfareportingUserRolesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingUserRolesDeleteRequest extends SpeakeasyBase {
    pathParams: DfareportingUserRolesDeletePathParams;
    queryParams: DfareportingUserRolesDeleteQueryParams;
    security: DfareportingUserRolesDeleteSecurity;
}
export declare class DfareportingUserRolesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
