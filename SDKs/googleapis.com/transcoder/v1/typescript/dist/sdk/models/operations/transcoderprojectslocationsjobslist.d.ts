import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TranscoderProjectsLocationsJobsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TranscoderProjectsLocationsJobsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TranscoderProjectsLocationsJobsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TranscoderProjectsLocationsJobsListRequest extends SpeakeasyBase {
    pathParams: TranscoderProjectsLocationsJobsListPathParams;
    queryParams: TranscoderProjectsLocationsJobsListQueryParams;
    security: TranscoderProjectsLocationsJobsListSecurity;
}
export declare class TranscoderProjectsLocationsJobsListResponse extends SpeakeasyBase {
    contentType: string;
    listJobsResponse?: shared.ListJobsResponse;
    statusCode: number;
}
