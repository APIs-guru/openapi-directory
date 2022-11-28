import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MlProjectsModelsVersionsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class MlProjectsModelsVersionsDeleteQueryParams extends SpeakeasyBase {
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
export declare class MlProjectsModelsVersionsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MlProjectsModelsVersionsDeleteRequest extends SpeakeasyBase {
    pathParams: MlProjectsModelsVersionsDeletePathParams;
    queryParams: MlProjectsModelsVersionsDeleteQueryParams;
    security: MlProjectsModelsVersionsDeleteSecurity;
}
export declare class MlProjectsModelsVersionsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
