import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataplexProjectsLocationsLakesZonesEntitiesUpdatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class DataplexProjectsLocationsLakesZonesEntitiesUpdateQueryParams extends SpeakeasyBase {
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
export declare class DataplexProjectsLocationsLakesZonesEntitiesUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataplexProjectsLocationsLakesZonesEntitiesUpdateRequest extends SpeakeasyBase {
    pathParams: DataplexProjectsLocationsLakesZonesEntitiesUpdatePathParams;
    queryParams: DataplexProjectsLocationsLakesZonesEntitiesUpdateQueryParams;
    request?: shared.GoogleCloudDataplexV1EntityInput;
    security: DataplexProjectsLocationsLakesZonesEntitiesUpdateSecurity;
}
export declare class DataplexProjectsLocationsLakesZonesEntitiesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDataplexV1Entity?: shared.GoogleCloudDataplexV1Entity;
    statusCode: number;
}
