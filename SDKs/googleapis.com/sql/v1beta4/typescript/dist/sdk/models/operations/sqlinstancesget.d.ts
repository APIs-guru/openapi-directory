import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlInstancesGetPathParams extends SpeakeasyBase {
    instance: string;
    project: string;
}
export declare class SqlInstancesGetQueryParams extends SpeakeasyBase {
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
export declare class SqlInstancesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlInstancesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlInstancesGetSecurity extends SpeakeasyBase {
    option1?: SqlInstancesGetSecurityOption1;
    option2?: SqlInstancesGetSecurityOption2;
}
export declare class SqlInstancesGetRequest extends SpeakeasyBase {
    pathParams: SqlInstancesGetPathParams;
    queryParams: SqlInstancesGetQueryParams;
    security: SqlInstancesGetSecurity;
}
export declare class SqlInstancesGetResponse extends SpeakeasyBase {
    contentType: string;
    databaseInstance?: shared.DatabaseInstance;
    statusCode: number;
}
