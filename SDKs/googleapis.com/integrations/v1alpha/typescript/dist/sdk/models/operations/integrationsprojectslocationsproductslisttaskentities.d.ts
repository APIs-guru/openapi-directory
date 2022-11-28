import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IntegrationsProjectsLocationsProductsListTaskEntitiesPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IntegrationsProjectsLocationsProductsListTaskEntitiesQueryParams extends SpeakeasyBase {
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
export declare class IntegrationsProjectsLocationsProductsListTaskEntitiesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IntegrationsProjectsLocationsProductsListTaskEntitiesRequest extends SpeakeasyBase {
    pathParams: IntegrationsProjectsLocationsProductsListTaskEntitiesPathParams;
    queryParams: IntegrationsProjectsLocationsProductsListTaskEntitiesQueryParams;
    security: IntegrationsProjectsLocationsProductsListTaskEntitiesSecurity;
}
export declare class IntegrationsProjectsLocationsProductsListTaskEntitiesResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIntegrationsV1alphaListTaskEntitiesResponse?: shared.GoogleCloudIntegrationsV1alphaListTaskEntitiesResponse;
    statusCode: number;
}
