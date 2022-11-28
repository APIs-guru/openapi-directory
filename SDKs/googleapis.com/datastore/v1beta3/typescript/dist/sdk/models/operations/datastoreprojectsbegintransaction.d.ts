import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatastoreProjectsBeginTransactionPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class DatastoreProjectsBeginTransactionQueryParams extends SpeakeasyBase {
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
export declare class DatastoreProjectsBeginTransactionSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastoreProjectsBeginTransactionSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastoreProjectsBeginTransactionSecurity extends SpeakeasyBase {
    option1?: DatastoreProjectsBeginTransactionSecurityOption1;
    option2?: DatastoreProjectsBeginTransactionSecurityOption2;
}
export declare class DatastoreProjectsBeginTransactionRequest extends SpeakeasyBase {
    pathParams: DatastoreProjectsBeginTransactionPathParams;
    queryParams: DatastoreProjectsBeginTransactionQueryParams;
    request?: shared.BeginTransactionRequest;
    security: DatastoreProjectsBeginTransactionSecurity;
}
export declare class DatastoreProjectsBeginTransactionResponse extends SpeakeasyBase {
    beginTransactionResponse?: shared.BeginTransactionResponse;
    contentType: string;
    statusCode: number;
}
