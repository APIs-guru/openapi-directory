import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MlProjectsGetConfigPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MlProjectsGetConfigQueryParams extends SpeakeasyBase {
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
export declare class MlProjectsGetConfigSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MlProjectsGetConfigRequest extends SpeakeasyBase {
    pathParams: MlProjectsGetConfigPathParams;
    queryParams: MlProjectsGetConfigQueryParams;
    security: MlProjectsGetConfigSecurity;
}
export declare class MlProjectsGetConfigResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudMlV1GetConfigResponse?: shared.GoogleCloudMlV1GetConfigResponse;
    statusCode: number;
}
