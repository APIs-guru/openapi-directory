import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingAccountPermissionsGetPathParams extends SpeakeasyBase {
    id: string;
    profileId: string;
}
export declare class DfareportingAccountPermissionsGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingAccountPermissionsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingAccountPermissionsGetRequest extends SpeakeasyBase {
    pathParams: DfareportingAccountPermissionsGetPathParams;
    queryParams: DfareportingAccountPermissionsGetQueryParams;
    security: DfareportingAccountPermissionsGetSecurity;
}
export declare class DfareportingAccountPermissionsGetResponse extends SpeakeasyBase {
    accountPermission?: shared.AccountPermission;
    contentType: string;
    statusCode: number;
}
