import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatastoreProjectsCommitPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class DatastoreProjectsCommitQueryParams extends SpeakeasyBase {
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
export declare class DatastoreProjectsCommitSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastoreProjectsCommitSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastoreProjectsCommitSecurity extends SpeakeasyBase {
    option1?: DatastoreProjectsCommitSecurityOption1;
    option2?: DatastoreProjectsCommitSecurityOption2;
}
export declare class DatastoreProjectsCommitRequest extends SpeakeasyBase {
    pathParams: DatastoreProjectsCommitPathParams;
    queryParams: DatastoreProjectsCommitQueryParams;
    request?: shared.CommitRequest;
    security: DatastoreProjectsCommitSecurity;
}
export declare class DatastoreProjectsCommitResponse extends SpeakeasyBase {
    commitResponse?: shared.CommitResponse;
    contentType: string;
    statusCode: number;
}
