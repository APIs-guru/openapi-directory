import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataplexProjectsLocationsLakesZonesAssetsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DataplexProjectsLocationsLakesZonesAssetsPatchQueryParams extends SpeakeasyBase {
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
    validateOnly?: boolean;
}
export declare class DataplexProjectsLocationsLakesZonesAssetsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataplexProjectsLocationsLakesZonesAssetsPatchRequest extends SpeakeasyBase {
    pathParams: DataplexProjectsLocationsLakesZonesAssetsPatchPathParams;
    queryParams: DataplexProjectsLocationsLakesZonesAssetsPatchQueryParams;
    request?: shared.GoogleCloudDataplexV1AssetInput;
    security: DataplexProjectsLocationsLakesZonesAssetsPatchSecurity;
}
export declare class DataplexProjectsLocationsLakesZonesAssetsPatchResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
