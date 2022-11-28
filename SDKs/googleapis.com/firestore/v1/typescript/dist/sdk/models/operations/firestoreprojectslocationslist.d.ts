import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirestoreProjectsLocationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirestoreProjectsLocationsListQueryParams extends SpeakeasyBase {
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
export declare class FirestoreProjectsLocationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsLocationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsLocationsListSecurity extends SpeakeasyBase {
    option1?: FirestoreProjectsLocationsListSecurityOption1;
    option2?: FirestoreProjectsLocationsListSecurityOption2;
}
export declare class FirestoreProjectsLocationsListRequest extends SpeakeasyBase {
    pathParams: FirestoreProjectsLocationsListPathParams;
    queryParams: FirestoreProjectsLocationsListQueryParams;
    security: FirestoreProjectsLocationsListSecurity;
}
export declare class FirestoreProjectsLocationsListResponse extends SpeakeasyBase {
    contentType: string;
    listLocationsResponse?: shared.ListLocationsResponse;
    statusCode: number;
}
