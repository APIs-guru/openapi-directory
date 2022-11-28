import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlInstancesDemoteMasterPathParams extends SpeakeasyBase {
    instance: string;
    project: string;
}
export declare class SqlInstancesDemoteMasterQueryParams extends SpeakeasyBase {
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
export declare class SqlInstancesDemoteMasterSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlInstancesDemoteMasterSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlInstancesDemoteMasterSecurity extends SpeakeasyBase {
    option1?: SqlInstancesDemoteMasterSecurityOption1;
    option2?: SqlInstancesDemoteMasterSecurityOption2;
}
export declare class SqlInstancesDemoteMasterRequest extends SpeakeasyBase {
    pathParams: SqlInstancesDemoteMasterPathParams;
    queryParams: SqlInstancesDemoteMasterQueryParams;
    request?: shared.InstancesDemoteMasterRequest;
    security: SqlInstancesDemoteMasterSecurity;
}
export declare class SqlInstancesDemoteMasterResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
