import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatastoreProjectsOperationsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatastoreProjectsOperationsDeleteQueryParams extends SpeakeasyBase {
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
export declare class DatastoreProjectsOperationsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastoreProjectsOperationsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastoreProjectsOperationsDeleteSecurity extends SpeakeasyBase {
    option1?: DatastoreProjectsOperationsDeleteSecurityOption1;
    option2?: DatastoreProjectsOperationsDeleteSecurityOption2;
}
export declare class DatastoreProjectsOperationsDeleteRequest extends SpeakeasyBase {
    pathParams: DatastoreProjectsOperationsDeletePathParams;
    queryParams: DatastoreProjectsOperationsDeleteQueryParams;
    security: DatastoreProjectsOperationsDeleteSecurity;
}
export declare class DatastoreProjectsOperationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
