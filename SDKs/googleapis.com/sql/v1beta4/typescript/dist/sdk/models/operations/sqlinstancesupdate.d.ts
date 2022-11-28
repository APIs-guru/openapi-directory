import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlInstancesUpdatePathParams extends SpeakeasyBase {
    instance: string;
    project: string;
}
export declare class SqlInstancesUpdateQueryParams extends SpeakeasyBase {
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
export declare class SqlInstancesUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlInstancesUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlInstancesUpdateSecurity extends SpeakeasyBase {
    option1?: SqlInstancesUpdateSecurityOption1;
    option2?: SqlInstancesUpdateSecurityOption2;
}
export declare class SqlInstancesUpdateRequest extends SpeakeasyBase {
    pathParams: SqlInstancesUpdatePathParams;
    queryParams: SqlInstancesUpdateQueryParams;
    request?: shared.DatabaseInstanceInput;
    security: SqlInstancesUpdateSecurity;
}
export declare class SqlInstancesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
