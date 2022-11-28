import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OsconfigProjectsPatchJobsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class OsconfigProjectsPatchJobsListQueryParams extends SpeakeasyBase {
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
export declare class OsconfigProjectsPatchJobsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OsconfigProjectsPatchJobsListRequest extends SpeakeasyBase {
    pathParams: OsconfigProjectsPatchJobsListPathParams;
    queryParams: OsconfigProjectsPatchJobsListQueryParams;
    security: OsconfigProjectsPatchJobsListSecurity;
}
export declare class OsconfigProjectsPatchJobsListResponse extends SpeakeasyBase {
    contentType: string;
    listPatchJobsResponse?: shared.ListPatchJobsResponse;
    statusCode: number;
}
