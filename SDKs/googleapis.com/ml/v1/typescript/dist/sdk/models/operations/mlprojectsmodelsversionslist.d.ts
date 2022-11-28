import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MlProjectsModelsVersionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MlProjectsModelsVersionsListQueryParams extends SpeakeasyBase {
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
export declare class MlProjectsModelsVersionsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MlProjectsModelsVersionsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MlProjectsModelsVersionsListSecurity extends SpeakeasyBase {
    option1?: MlProjectsModelsVersionsListSecurityOption1;
    option2?: MlProjectsModelsVersionsListSecurityOption2;
}
export declare class MlProjectsModelsVersionsListRequest extends SpeakeasyBase {
    pathParams: MlProjectsModelsVersionsListPathParams;
    queryParams: MlProjectsModelsVersionsListQueryParams;
    security: MlProjectsModelsVersionsListSecurity;
}
export declare class MlProjectsModelsVersionsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudMlV1ListVersionsResponse?: shared.GoogleCloudMlV1ListVersionsResponse;
    statusCode: number;
}
