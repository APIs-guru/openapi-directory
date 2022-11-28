import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MlProjectsLocationsStudiesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MlProjectsLocationsStudiesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    studyId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MlProjectsLocationsStudiesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MlProjectsLocationsStudiesCreateRequest extends SpeakeasyBase {
    pathParams: MlProjectsLocationsStudiesCreatePathParams;
    queryParams: MlProjectsLocationsStudiesCreateQueryParams;
    request?: shared.GoogleCloudMlV1StudyInput;
    security: MlProjectsLocationsStudiesCreateSecurity;
}
export declare class MlProjectsLocationsStudiesCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudMlV1Study?: shared.GoogleCloudMlV1Study;
    statusCode: number;
}
