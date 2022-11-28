import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatastoreProjectsOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatastoreProjectsOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class DatastoreProjectsOperationsCancelSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastoreProjectsOperationsCancelSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastoreProjectsOperationsCancelSecurity extends SpeakeasyBase {
    option1?: DatastoreProjectsOperationsCancelSecurityOption1;
    option2?: DatastoreProjectsOperationsCancelSecurityOption2;
}
export declare class DatastoreProjectsOperationsCancelRequest extends SpeakeasyBase {
    pathParams: DatastoreProjectsOperationsCancelPathParams;
    queryParams: DatastoreProjectsOperationsCancelQueryParams;
    security: DatastoreProjectsOperationsCancelSecurity;
}
export declare class DatastoreProjectsOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
