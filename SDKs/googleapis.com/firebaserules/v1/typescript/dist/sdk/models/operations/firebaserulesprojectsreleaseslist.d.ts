import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebaserulesProjectsReleasesListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirebaserulesProjectsReleasesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class FirebaserulesProjectsReleasesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaserulesProjectsReleasesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaserulesProjectsReleasesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaserulesProjectsReleasesListSecurity extends SpeakeasyBase {
    option1?: FirebaserulesProjectsReleasesListSecurityOption1;
    option2?: FirebaserulesProjectsReleasesListSecurityOption2;
    option3?: FirebaserulesProjectsReleasesListSecurityOption3;
}
export declare class FirebaserulesProjectsReleasesListRequest extends SpeakeasyBase {
    pathParams: FirebaserulesProjectsReleasesListPathParams;
    queryParams: FirebaserulesProjectsReleasesListQueryParams;
    security: FirebaserulesProjectsReleasesListSecurity;
}
export declare class FirebaserulesProjectsReleasesListResponse extends SpeakeasyBase {
    contentType: string;
    listReleasesResponse?: shared.ListReleasesResponse;
    statusCode: number;
}
