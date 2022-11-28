import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataplexProjectsLocationsLakesZonesEntitiesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DataplexProjectsLocationsLakesZonesEntitiesCreateQueryParams extends SpeakeasyBase {
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
    validateOnly?: boolean;
}
export declare class DataplexProjectsLocationsLakesZonesEntitiesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataplexProjectsLocationsLakesZonesEntitiesCreateRequest extends SpeakeasyBase {
    pathParams: DataplexProjectsLocationsLakesZonesEntitiesCreatePathParams;
    queryParams: DataplexProjectsLocationsLakesZonesEntitiesCreateQueryParams;
    request?: shared.GoogleCloudDataplexV1EntityInput;
    security: DataplexProjectsLocationsLakesZonesEntitiesCreateSecurity;
}
export declare class DataplexProjectsLocationsLakesZonesEntitiesCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDataplexV1Entity?: shared.GoogleCloudDataplexV1Entity;
    statusCode: number;
}
