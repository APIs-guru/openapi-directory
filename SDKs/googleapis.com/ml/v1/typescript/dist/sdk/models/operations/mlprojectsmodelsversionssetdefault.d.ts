import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MlProjectsModelsVersionsSetDefaultPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MlProjectsModelsVersionsSetDefaultQueryParams extends SpeakeasyBase {
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
export declare class MlProjectsModelsVersionsSetDefaultSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MlProjectsModelsVersionsSetDefaultRequest extends SpeakeasyBase {
    pathParams: MlProjectsModelsVersionsSetDefaultPathParams;
    queryParams: MlProjectsModelsVersionsSetDefaultQueryParams;
    request?: Map<string, any>;
    security: MlProjectsModelsVersionsSetDefaultSecurity;
}
export declare class MlProjectsModelsVersionsSetDefaultResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudMlV1Version?: shared.GoogleCloudMlV1Version;
    statusCode: number;
}
