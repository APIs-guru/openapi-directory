import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatastoreProjectsOperationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatastoreProjectsOperationsGetQueryParams extends SpeakeasyBase {
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
export declare class DatastoreProjectsOperationsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastoreProjectsOperationsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastoreProjectsOperationsGetSecurity extends SpeakeasyBase {
    option1?: DatastoreProjectsOperationsGetSecurityOption1;
    option2?: DatastoreProjectsOperationsGetSecurityOption2;
}
export declare class DatastoreProjectsOperationsGetRequest extends SpeakeasyBase {
    pathParams: DatastoreProjectsOperationsGetPathParams;
    queryParams: DatastoreProjectsOperationsGetQueryParams;
    security: DatastoreProjectsOperationsGetSecurity;
}
export declare class DatastoreProjectsOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
