import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OsconfigProjectsPatchJobsInstanceDetailsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class OsconfigProjectsPatchJobsInstanceDetailsListQueryParams extends SpeakeasyBase {
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
export declare class OsconfigProjectsPatchJobsInstanceDetailsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OsconfigProjectsPatchJobsInstanceDetailsListRequest extends SpeakeasyBase {
    pathParams: OsconfigProjectsPatchJobsInstanceDetailsListPathParams;
    queryParams: OsconfigProjectsPatchJobsInstanceDetailsListQueryParams;
    security: OsconfigProjectsPatchJobsInstanceDetailsListSecurity;
}
export declare class OsconfigProjectsPatchJobsInstanceDetailsListResponse extends SpeakeasyBase {
    contentType: string;
    listPatchJobInstanceDetailsResponse?: shared.ListPatchJobInstanceDetailsResponse;
    statusCode: number;
}
