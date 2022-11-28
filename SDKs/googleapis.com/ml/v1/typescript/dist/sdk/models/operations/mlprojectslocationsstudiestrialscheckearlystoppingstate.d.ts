import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateQueryParams extends SpeakeasyBase {
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
export declare class MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateRequest extends SpeakeasyBase {
    pathParams: MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStatePathParams;
    queryParams: MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateQueryParams;
    request?: Map<string, any>;
    security: MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateSecurity;
}
export declare class MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
