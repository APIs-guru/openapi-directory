import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatastoreProjectsRunQueryPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class DatastoreProjectsRunQueryQueryParams extends SpeakeasyBase {
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
export declare class DatastoreProjectsRunQuerySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastoreProjectsRunQuerySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastoreProjectsRunQuerySecurity extends SpeakeasyBase {
    option1?: DatastoreProjectsRunQuerySecurityOption1;
    option2?: DatastoreProjectsRunQuerySecurityOption2;
}
export declare class DatastoreProjectsRunQueryRequest extends SpeakeasyBase {
    pathParams: DatastoreProjectsRunQueryPathParams;
    queryParams: DatastoreProjectsRunQueryQueryParams;
    request?: shared.RunQueryRequest;
    security: DatastoreProjectsRunQuerySecurity;
}
export declare class DatastoreProjectsRunQueryResponse extends SpeakeasyBase {
    contentType: string;
    runQueryResponse?: shared.RunQueryResponse;
    statusCode: number;
}
