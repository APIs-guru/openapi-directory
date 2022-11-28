import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatastoreProjectsLookupPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class DatastoreProjectsLookupQueryParams extends SpeakeasyBase {
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
export declare class DatastoreProjectsLookupSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastoreProjectsLookupSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastoreProjectsLookupSecurity extends SpeakeasyBase {
    option1?: DatastoreProjectsLookupSecurityOption1;
    option2?: DatastoreProjectsLookupSecurityOption2;
}
export declare class DatastoreProjectsLookupRequest extends SpeakeasyBase {
    pathParams: DatastoreProjectsLookupPathParams;
    queryParams: DatastoreProjectsLookupQueryParams;
    request?: shared.LookupRequest;
    security: DatastoreProjectsLookupSecurity;
}
export declare class DatastoreProjectsLookupResponse extends SpeakeasyBase {
    contentType: string;
    lookupResponse?: shared.LookupResponse;
    statusCode: number;
}
