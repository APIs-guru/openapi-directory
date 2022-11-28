import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlInstancesPatchPathParams extends SpeakeasyBase {
    instance: string;
    project: string;
}
export declare class SqlInstancesPatchQueryParams extends SpeakeasyBase {
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
export declare class SqlInstancesPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlInstancesPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlInstancesPatchSecurity extends SpeakeasyBase {
    option1?: SqlInstancesPatchSecurityOption1;
    option2?: SqlInstancesPatchSecurityOption2;
}
export declare class SqlInstancesPatchRequest extends SpeakeasyBase {
    pathParams: SqlInstancesPatchPathParams;
    queryParams: SqlInstancesPatchQueryParams;
    request?: shared.DatabaseInstanceInput;
    security: SqlInstancesPatchSecurity;
}
export declare class SqlInstancesPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
