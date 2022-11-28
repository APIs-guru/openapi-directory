import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MlProjectsPredictPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MlProjectsPredictQueryParams extends SpeakeasyBase {
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
export declare class MlProjectsPredictSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MlProjectsPredictRequest extends SpeakeasyBase {
    pathParams: MlProjectsPredictPathParams;
    queryParams: MlProjectsPredictQueryParams;
    request?: shared.GoogleCloudMlV1PredictRequest;
    security: MlProjectsPredictSecurity;
}
export declare class MlProjectsPredictResponse extends SpeakeasyBase {
    contentType: string;
    googleApiHttpBody?: shared.GoogleApiHttpBody;
    statusCode: number;
}
