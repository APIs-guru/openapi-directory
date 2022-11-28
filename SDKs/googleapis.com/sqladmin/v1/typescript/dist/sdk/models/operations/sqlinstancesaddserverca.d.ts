import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlInstancesAddServerCaPathParams extends SpeakeasyBase {
    instance: string;
    project: string;
}
export declare class SqlInstancesAddServerCaQueryParams extends SpeakeasyBase {
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
export declare class SqlInstancesAddServerCaSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlInstancesAddServerCaSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlInstancesAddServerCaSecurity extends SpeakeasyBase {
    option1?: SqlInstancesAddServerCaSecurityOption1;
    option2?: SqlInstancesAddServerCaSecurityOption2;
}
export declare class SqlInstancesAddServerCaRequest extends SpeakeasyBase {
    pathParams: SqlInstancesAddServerCaPathParams;
    queryParams: SqlInstancesAddServerCaQueryParams;
    security: SqlInstancesAddServerCaSecurity;
}
export declare class SqlInstancesAddServerCaResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
