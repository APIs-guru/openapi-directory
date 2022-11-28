import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingAccountUserProfilesGetPathParams extends SpeakeasyBase {
    id: string;
    profileId: string;
}
export declare class DfareportingAccountUserProfilesGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingAccountUserProfilesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingAccountUserProfilesGetRequest extends SpeakeasyBase {
    pathParams: DfareportingAccountUserProfilesGetPathParams;
    queryParams: DfareportingAccountUserProfilesGetQueryParams;
    security: DfareportingAccountUserProfilesGetSecurity;
}
export declare class DfareportingAccountUserProfilesGetResponse extends SpeakeasyBase {
    accountUserProfile?: shared.AccountUserProfile;
    contentType: string;
    statusCode: number;
}
