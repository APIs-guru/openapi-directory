import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlInstancesExportPathParams extends SpeakeasyBase {
    instance: string;
    project: string;
}
export declare class SqlInstancesExportQueryParams extends SpeakeasyBase {
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
export declare class SqlInstancesExportSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlInstancesExportRequest extends SpeakeasyBase {
    pathParams: SqlInstancesExportPathParams;
    queryParams: SqlInstancesExportQueryParams;
    request?: shared.InstancesExportRequest;
    security: SqlInstancesExportSecurity;
}
export declare class SqlInstancesExportResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
