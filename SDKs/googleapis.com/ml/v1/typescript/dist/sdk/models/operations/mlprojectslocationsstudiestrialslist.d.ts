import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MlProjectsLocationsStudiesTrialsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MlProjectsLocationsStudiesTrialsListQueryParams extends SpeakeasyBase {
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
export declare class MlProjectsLocationsStudiesTrialsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MlProjectsLocationsStudiesTrialsListRequest extends SpeakeasyBase {
    pathParams: MlProjectsLocationsStudiesTrialsListPathParams;
    queryParams: MlProjectsLocationsStudiesTrialsListQueryParams;
    security: MlProjectsLocationsStudiesTrialsListSecurity;
}
export declare class MlProjectsLocationsStudiesTrialsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudMlV1ListTrialsResponse?: shared.GoogleCloudMlV1ListTrialsResponse;
    statusCode: number;
}
