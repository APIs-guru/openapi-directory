import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatastoreProjectsExportPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class DatastoreProjectsExportQueryParams extends SpeakeasyBase {
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
export declare class DatastoreProjectsExportSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastoreProjectsExportSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastoreProjectsExportSecurity extends SpeakeasyBase {
    option1?: DatastoreProjectsExportSecurityOption1;
    option2?: DatastoreProjectsExportSecurityOption2;
}
export declare class DatastoreProjectsExportRequest extends SpeakeasyBase {
    pathParams: DatastoreProjectsExportPathParams;
    queryParams: DatastoreProjectsExportQueryParams;
    request?: shared.GoogleDatastoreAdminV1ExportEntitiesRequest;
    security: DatastoreProjectsExportSecurity;
}
export declare class DatastoreProjectsExportResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
