import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecuritycenterProjectsBigQueryExportsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SecuritycenterProjectsBigQueryExportsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    bigQueryExportId?: string;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SecuritycenterProjectsBigQueryExportsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecuritycenterProjectsBigQueryExportsCreateRequest extends SpeakeasyBase {
    pathParams: SecuritycenterProjectsBigQueryExportsCreatePathParams;
    queryParams: SecuritycenterProjectsBigQueryExportsCreateQueryParams;
    request?: shared.GoogleCloudSecuritycenterV1BigQueryExportInput;
    security: SecuritycenterProjectsBigQueryExportsCreateSecurity;
}
export declare class SecuritycenterProjectsBigQueryExportsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudSecuritycenterV1BigQueryExport?: shared.GoogleCloudSecuritycenterV1BigQueryExport;
    statusCode: number;
}
