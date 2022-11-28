import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatastoreProjectsRollbackPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class DatastoreProjectsRollbackQueryParams extends SpeakeasyBase {
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
export declare class DatastoreProjectsRollbackSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastoreProjectsRollbackSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastoreProjectsRollbackSecurity extends SpeakeasyBase {
    option1?: DatastoreProjectsRollbackSecurityOption1;
    option2?: DatastoreProjectsRollbackSecurityOption2;
}
export declare class DatastoreProjectsRollbackRequest extends SpeakeasyBase {
    pathParams: DatastoreProjectsRollbackPathParams;
    queryParams: DatastoreProjectsRollbackQueryParams;
    request?: shared.RollbackRequest;
    security: DatastoreProjectsRollbackSecurity;
}
export declare class DatastoreProjectsRollbackResponse extends SpeakeasyBase {
    contentType: string;
    rollbackResponse?: Map<string, any>;
    statusCode: number;
}
