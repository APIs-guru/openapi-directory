import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlConnectGetPathParams extends SpeakeasyBase {
    instance: string;
    project: string;
}
export declare class SqlConnectGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    readTime?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SqlConnectGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlConnectGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlConnectGetSecurity extends SpeakeasyBase {
    option1?: SqlConnectGetSecurityOption1;
    option2?: SqlConnectGetSecurityOption2;
}
export declare class SqlConnectGetRequest extends SpeakeasyBase {
    pathParams: SqlConnectGetPathParams;
    queryParams: SqlConnectGetQueryParams;
    security: SqlConnectGetSecurity;
}
export declare class SqlConnectGetResponse extends SpeakeasyBase {
    connectSettings?: shared.ConnectSettings;
    contentType: string;
    statusCode: number;
}
