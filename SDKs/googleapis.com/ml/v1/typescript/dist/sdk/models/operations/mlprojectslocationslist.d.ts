import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MlProjectsLocationsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MlProjectsLocationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MlProjectsLocationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MlProjectsLocationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MlProjectsLocationsListSecurity extends SpeakeasyBase {
    option1?: MlProjectsLocationsListSecurityOption1;
    option2?: MlProjectsLocationsListSecurityOption2;
}
export declare class MlProjectsLocationsListRequest extends SpeakeasyBase {
    pathParams: MlProjectsLocationsListPathParams;
    queryParams: MlProjectsLocationsListQueryParams;
    security: MlProjectsLocationsListSecurity;
}
export declare class MlProjectsLocationsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudMlV1ListLocationsResponse?: shared.GoogleCloudMlV1ListLocationsResponse;
    statusCode: number;
}
