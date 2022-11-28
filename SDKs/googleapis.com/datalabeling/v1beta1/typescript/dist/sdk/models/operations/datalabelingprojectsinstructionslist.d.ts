import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatalabelingProjectsInstructionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatalabelingProjectsInstructionsListQueryParams extends SpeakeasyBase {
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
export declare class DatalabelingProjectsInstructionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatalabelingProjectsInstructionsListRequest extends SpeakeasyBase {
    pathParams: DatalabelingProjectsInstructionsListPathParams;
    queryParams: DatalabelingProjectsInstructionsListQueryParams;
    security: DatalabelingProjectsInstructionsListSecurity;
}
export declare class DatalabelingProjectsInstructionsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatalabelingV1beta1ListInstructionsResponse?: shared.GoogleCloudDatalabelingV1beta1ListInstructionsResponse;
    statusCode: number;
}
