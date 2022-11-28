import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlInstancesListServerCasPathParams extends SpeakeasyBase {
    instance: string;
    project: string;
}
export declare class SqlInstancesListServerCasQueryParams extends SpeakeasyBase {
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
export declare class SqlInstancesListServerCasSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlInstancesListServerCasSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlInstancesListServerCasSecurity extends SpeakeasyBase {
    option1?: SqlInstancesListServerCasSecurityOption1;
    option2?: SqlInstancesListServerCasSecurityOption2;
}
export declare class SqlInstancesListServerCasRequest extends SpeakeasyBase {
    pathParams: SqlInstancesListServerCasPathParams;
    queryParams: SqlInstancesListServerCasQueryParams;
    security: SqlInstancesListServerCasSecurity;
}
export declare class SqlInstancesListServerCasResponse extends SpeakeasyBase {
    contentType: string;
    instancesListServerCasResponse?: shared.InstancesListServerCasResponse;
    statusCode: number;
}
