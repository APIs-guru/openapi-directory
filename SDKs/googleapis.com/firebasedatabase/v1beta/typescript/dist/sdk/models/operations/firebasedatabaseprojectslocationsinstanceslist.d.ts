import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FirebasedatabaseProjectsLocationsInstancesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirebasedatabaseProjectsLocationsInstancesListQueryParams extends SpeakeasyBase {
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
    showDeleted?: boolean;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class FirebasedatabaseProjectsLocationsInstancesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasedatabaseProjectsLocationsInstancesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasedatabaseProjectsLocationsInstancesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasedatabaseProjectsLocationsInstancesListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasedatabaseProjectsLocationsInstancesListSecurity extends SpeakeasyBase {
    option1?: FirebasedatabaseProjectsLocationsInstancesListSecurityOption1;
    option2?: FirebasedatabaseProjectsLocationsInstancesListSecurityOption2;
    option3?: FirebasedatabaseProjectsLocationsInstancesListSecurityOption3;
    option4?: FirebasedatabaseProjectsLocationsInstancesListSecurityOption4;
}
export declare class FirebasedatabaseProjectsLocationsInstancesListRequest extends SpeakeasyBase {
    pathParams: FirebasedatabaseProjectsLocationsInstancesListPathParams;
    queryParams: FirebasedatabaseProjectsLocationsInstancesListQueryParams;
    security: FirebasedatabaseProjectsLocationsInstancesListSecurity;
}
export declare class FirebasedatabaseProjectsLocationsInstancesListResponse extends SpeakeasyBase {
    contentType: string;
    listDatabaseInstancesResponse?: shared.ListDatabaseInstancesResponse;
    statusCode: number;
}
