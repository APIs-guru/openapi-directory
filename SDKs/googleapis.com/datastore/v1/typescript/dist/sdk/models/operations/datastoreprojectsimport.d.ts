import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatastoreProjectsImportPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class DatastoreProjectsImportQueryParams extends SpeakeasyBase {
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
export declare class DatastoreProjectsImportSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastoreProjectsImportSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastoreProjectsImportSecurity extends SpeakeasyBase {
    option1?: DatastoreProjectsImportSecurityOption1;
    option2?: DatastoreProjectsImportSecurityOption2;
}
export declare class DatastoreProjectsImportRequest extends SpeakeasyBase {
    pathParams: DatastoreProjectsImportPathParams;
    queryParams: DatastoreProjectsImportQueryParams;
    request?: shared.GoogleDatastoreAdminV1ImportEntitiesRequest;
    security: DatastoreProjectsImportSecurity;
}
export declare class DatastoreProjectsImportResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
