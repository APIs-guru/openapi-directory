import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MlProjectsModelsVersionsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MlProjectsModelsVersionsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MlProjectsModelsVersionsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MlProjectsModelsVersionsPatchRequest extends SpeakeasyBase {
    pathParams: MlProjectsModelsVersionsPatchPathParams;
    queryParams: MlProjectsModelsVersionsPatchQueryParams;
    request?: shared.GoogleCloudMlV1VersionInput;
    security: MlProjectsModelsVersionsPatchSecurity;
}
export declare class MlProjectsModelsVersionsPatchResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
