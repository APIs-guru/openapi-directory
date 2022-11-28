import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlInstancesImportPathParams extends SpeakeasyBase {
    instance: string;
    project: string;
}
export declare class SqlInstancesImportQueryParams extends SpeakeasyBase {
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
export declare class SqlInstancesImportSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlInstancesImportRequest extends SpeakeasyBase {
    pathParams: SqlInstancesImportPathParams;
    queryParams: SqlInstancesImportQueryParams;
    request?: shared.InstancesImportRequest;
    security: SqlInstancesImportSecurity;
}
export declare class SqlInstancesImportResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
