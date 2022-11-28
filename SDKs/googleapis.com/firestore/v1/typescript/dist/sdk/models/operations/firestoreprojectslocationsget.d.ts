import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirestoreProjectsLocationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirestoreProjectsLocationsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    maskFieldPaths?: string[];
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    readTime?: string;
    transaction?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class FirestoreProjectsLocationsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsLocationsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsLocationsGetSecurity extends SpeakeasyBase {
    option1?: FirestoreProjectsLocationsGetSecurityOption1;
    option2?: FirestoreProjectsLocationsGetSecurityOption2;
}
export declare class FirestoreProjectsLocationsGetRequest extends SpeakeasyBase {
    pathParams: FirestoreProjectsLocationsGetPathParams;
    queryParams: FirestoreProjectsLocationsGetQueryParams;
    security: FirestoreProjectsLocationsGetSecurity;
}
export declare class FirestoreProjectsLocationsGetResponse extends SpeakeasyBase {
    contentType: string;
    location?: shared.Location;
    statusCode: number;
}
