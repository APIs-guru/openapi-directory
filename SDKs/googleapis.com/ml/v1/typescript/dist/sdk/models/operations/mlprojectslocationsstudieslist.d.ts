import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MlProjectsLocationsStudiesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MlProjectsLocationsStudiesListQueryParams extends SpeakeasyBase {
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
export declare class MlProjectsLocationsStudiesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MlProjectsLocationsStudiesListRequest extends SpeakeasyBase {
    pathParams: MlProjectsLocationsStudiesListPathParams;
    queryParams: MlProjectsLocationsStudiesListQueryParams;
    security: MlProjectsLocationsStudiesListSecurity;
}
export declare class MlProjectsLocationsStudiesListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudMlV1ListStudiesResponse?: shared.GoogleCloudMlV1ListStudiesResponse;
    statusCode: number;
}
