import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirestoreProjectsDatabasesOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirestoreProjectsDatabasesOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class FirestoreProjectsDatabasesOperationsCancelSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesOperationsCancelSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesOperationsCancelSecurity extends SpeakeasyBase {
    option1?: FirestoreProjectsDatabasesOperationsCancelSecurityOption1;
    option2?: FirestoreProjectsDatabasesOperationsCancelSecurityOption2;
}
export declare class FirestoreProjectsDatabasesOperationsCancelRequest extends SpeakeasyBase {
    pathParams: FirestoreProjectsDatabasesOperationsCancelPathParams;
    queryParams: FirestoreProjectsDatabasesOperationsCancelQueryParams;
    request?: Map<string, any>;
    security: FirestoreProjectsDatabasesOperationsCancelSecurity;
}
export declare class FirestoreProjectsDatabasesOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
