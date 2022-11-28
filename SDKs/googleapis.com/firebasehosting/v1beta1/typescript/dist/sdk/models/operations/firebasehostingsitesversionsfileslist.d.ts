import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebasehostingSitesVersionsFilesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum FirebasehostingSitesVersionsFilesListStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    Expected = "EXPECTED",
    Active = "ACTIVE"
}
export declare class FirebasehostingSitesVersionsFilesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    status?: FirebasehostingSitesVersionsFilesListStatusEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class FirebasehostingSitesVersionsFilesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesVersionsFilesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesVersionsFilesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesVersionsFilesListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesVersionsFilesListSecurity extends SpeakeasyBase {
    option1?: FirebasehostingSitesVersionsFilesListSecurityOption1;
    option2?: FirebasehostingSitesVersionsFilesListSecurityOption2;
    option3?: FirebasehostingSitesVersionsFilesListSecurityOption3;
    option4?: FirebasehostingSitesVersionsFilesListSecurityOption4;
}
export declare class FirebasehostingSitesVersionsFilesListRequest extends SpeakeasyBase {
    pathParams: FirebasehostingSitesVersionsFilesListPathParams;
    queryParams: FirebasehostingSitesVersionsFilesListQueryParams;
    security: FirebasehostingSitesVersionsFilesListSecurity;
}
export declare class FirebasehostingSitesVersionsFilesListResponse extends SpeakeasyBase {
    contentType: string;
    listVersionFilesResponse?: shared.ListVersionFilesResponse;
    statusCode: number;
}
