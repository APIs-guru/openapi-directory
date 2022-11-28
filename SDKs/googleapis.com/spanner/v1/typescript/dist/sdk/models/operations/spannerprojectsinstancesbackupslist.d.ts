import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SpannerProjectsInstancesBackupsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SpannerProjectsInstancesBackupsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class SpannerProjectsInstancesBackupsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesBackupsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SpannerProjectsInstancesBackupsListSecurity extends SpeakeasyBase {
    option1?: SpannerProjectsInstancesBackupsListSecurityOption1;
    option2?: SpannerProjectsInstancesBackupsListSecurityOption2;
}
export declare class SpannerProjectsInstancesBackupsListRequest extends SpeakeasyBase {
    pathParams: SpannerProjectsInstancesBackupsListPathParams;
    queryParams: SpannerProjectsInstancesBackupsListQueryParams;
    security: SpannerProjectsInstancesBackupsListSecurity;
}
export declare class SpannerProjectsInstancesBackupsListResponse extends SpeakeasyBase {
    contentType: string;
    listBackupsResponse?: shared.ListBackupsResponse;
    statusCode: number;
}
