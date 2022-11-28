import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MlProjectsModelsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MlProjectsModelsCreateQueryParams extends SpeakeasyBase {
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
export declare class MlProjectsModelsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MlProjectsModelsCreateRequest extends SpeakeasyBase {
    pathParams: MlProjectsModelsCreatePathParams;
    queryParams: MlProjectsModelsCreateQueryParams;
    request?: shared.GoogleCloudMlV1ModelInput;
    security: MlProjectsModelsCreateSecurity;
}
export declare class MlProjectsModelsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudMlV1Model?: shared.GoogleCloudMlV1Model;
    statusCode: number;
}
