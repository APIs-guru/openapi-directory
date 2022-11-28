import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MlProjectsModelsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MlProjectsModelsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MlProjectsModelsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MlProjectsModelsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MlProjectsModelsListSecurity extends SpeakeasyBase {
    option1?: MlProjectsModelsListSecurityOption1;
    option2?: MlProjectsModelsListSecurityOption2;
}
export declare class MlProjectsModelsListRequest extends SpeakeasyBase {
    pathParams: MlProjectsModelsListPathParams;
    queryParams: MlProjectsModelsListQueryParams;
    security: MlProjectsModelsListSecurity;
}
export declare class MlProjectsModelsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudMlV1ListModelsResponse?: shared.GoogleCloudMlV1ListModelsResponse;
    statusCode: number;
}
