import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirestoreProjectsDatabasesDocumentsListenPathParams extends SpeakeasyBase {
    database: string;
}
export declare class FirestoreProjectsDatabasesDocumentsListenQueryParams extends SpeakeasyBase {
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
export declare class FirestoreProjectsDatabasesDocumentsListenSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesDocumentsListenSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesDocumentsListenSecurity extends SpeakeasyBase {
    option1?: FirestoreProjectsDatabasesDocumentsListenSecurityOption1;
    option2?: FirestoreProjectsDatabasesDocumentsListenSecurityOption2;
}
export declare class FirestoreProjectsDatabasesDocumentsListenRequest extends SpeakeasyBase {
    pathParams: FirestoreProjectsDatabasesDocumentsListenPathParams;
    queryParams: FirestoreProjectsDatabasesDocumentsListenQueryParams;
    request?: shared.ListenRequest;
    security: FirestoreProjectsDatabasesDocumentsListenSecurity;
}
export declare class FirestoreProjectsDatabasesDocumentsListenResponse extends SpeakeasyBase {
    contentType: string;
    listenResponse?: shared.ListenResponse;
    statusCode: number;
}
