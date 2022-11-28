import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpannerProjectsInstancesDatabasesGetScansPathParams extends SpeakeasyBase {
    name: string;
}
export declare enum SpannerProjectsInstancesDatabasesGetScansViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    Summary = "SUMMARY",
    Full = "FULL"
}
export declare class SpannerProjectsInstancesDatabasesGetScansQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    endTime?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    startTime?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: SpannerProjectsInstancesDatabasesGetScansViewEnum;
}
export declare class SpannerProjectsInstancesDatabasesGetScansSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesGetScansSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesDatabasesGetScansSecurity extends SpeakeasyBase {
    option1?: SpannerProjectsInstancesDatabasesGetScansSecurityOption1;
    option2?: SpannerProjectsInstancesDatabasesGetScansSecurityOption2;
}
export declare class SpannerProjectsInstancesDatabasesGetScansRequest extends SpeakeasyBase {
    pathParams: SpannerProjectsInstancesDatabasesGetScansPathParams;
    queryParams: SpannerProjectsInstancesDatabasesGetScansQueryParams;
    security: SpannerProjectsInstancesDatabasesGetScansSecurity;
}
export declare class SpannerProjectsInstancesDatabasesGetScansResponse extends SpeakeasyBase {
    contentType: string;
    scan?: shared.Scan;
    statusCode: number;
}
