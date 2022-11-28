import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataplexProjectsLocationsLakesZonesAssetsTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class DataplexProjectsLocationsLakesZonesAssetsTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class DataplexProjectsLocationsLakesZonesAssetsTestIamPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataplexProjectsLocationsLakesZonesAssetsTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: DataplexProjectsLocationsLakesZonesAssetsTestIamPermissionsPathParams;
    queryParams: DataplexProjectsLocationsLakesZonesAssetsTestIamPermissionsQueryParams;
    request?: shared.GoogleIamV1TestIamPermissionsRequest;
    security: DataplexProjectsLocationsLakesZonesAssetsTestIamPermissionsSecurity;
}
export declare class DataplexProjectsLocationsLakesZonesAssetsTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    googleIamV1TestIamPermissionsResponse?: shared.GoogleIamV1TestIamPermissionsResponse;
    statusCode: number;
}
