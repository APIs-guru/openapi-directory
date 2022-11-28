import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudtraceProjectsTracesListPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare enum CloudtraceProjectsTracesListViewEnum {
    ViewTypeUnspecified = "VIEW_TYPE_UNSPECIFIED",
    Minimal = "MINIMAL",
    Rootspan = "ROOTSPAN",
    Complete = "COMPLETE"
}
export declare class CloudtraceProjectsTracesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    endTime?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    startTime?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: CloudtraceProjectsTracesListViewEnum;
}
export declare class CloudtraceProjectsTracesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudtraceProjectsTracesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudtraceProjectsTracesListSecurity extends SpeakeasyBase {
    option1?: CloudtraceProjectsTracesListSecurityOption1;
    option2?: CloudtraceProjectsTracesListSecurityOption2;
}
export declare class CloudtraceProjectsTracesListRequest extends SpeakeasyBase {
    pathParams: CloudtraceProjectsTracesListPathParams;
    queryParams: CloudtraceProjectsTracesListQueryParams;
    security: CloudtraceProjectsTracesListSecurity;
}
export declare class CloudtraceProjectsTracesListResponse extends SpeakeasyBase {
    contentType: string;
    listTracesResponse?: shared.ListTracesResponse;
    statusCode: number;
}
