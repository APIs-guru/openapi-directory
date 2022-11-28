import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingUserProfilesListQueryParams extends SpeakeasyBase {
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
export declare class DfareportingUserProfilesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingUserProfilesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingUserProfilesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingUserProfilesListSecurity extends SpeakeasyBase {
    option1?: DfareportingUserProfilesListSecurityOption1;
    option2?: DfareportingUserProfilesListSecurityOption2;
    option3?: DfareportingUserProfilesListSecurityOption3;
}
export declare class DfareportingUserProfilesListRequest extends SpeakeasyBase {
    queryParams: DfareportingUserProfilesListQueryParams;
    security: DfareportingUserProfilesListSecurity;
}
export declare class DfareportingUserProfilesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userProfileList?: shared.UserProfileList;
}
