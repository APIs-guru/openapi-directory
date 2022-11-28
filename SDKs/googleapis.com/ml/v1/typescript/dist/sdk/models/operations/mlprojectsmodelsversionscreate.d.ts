import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MlProjectsModelsVersionsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MlProjectsModelsVersionsCreateQueryParams extends SpeakeasyBase {
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
export declare class MlProjectsModelsVersionsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MlProjectsModelsVersionsCreateRequest extends SpeakeasyBase {
    pathParams: MlProjectsModelsVersionsCreatePathParams;
    queryParams: MlProjectsModelsVersionsCreateQueryParams;
    request?: shared.GoogleCloudMlV1VersionInput;
    security: MlProjectsModelsVersionsCreateSecurity;
}
export declare class MlProjectsModelsVersionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
