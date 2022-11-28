import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataplexProjectsLocationsLakesZonesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DataplexProjectsLocationsLakesZonesCreateQueryParams extends SpeakeasyBase {
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
    zoneId?: string;
}
export declare class DataplexProjectsLocationsLakesZonesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataplexProjectsLocationsLakesZonesCreateRequest extends SpeakeasyBase {
    pathParams: DataplexProjectsLocationsLakesZonesCreatePathParams;
    queryParams: DataplexProjectsLocationsLakesZonesCreateQueryParams;
    request?: shared.GoogleCloudDataplexV1ZoneInput;
    security: DataplexProjectsLocationsLakesZonesCreateSecurity;
}
export declare class DataplexProjectsLocationsLakesZonesCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
