import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataplexProjectsLocationsDataScansRunPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DataplexProjectsLocationsDataScansRunQueryParams extends SpeakeasyBase {
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
export declare class DataplexProjectsLocationsDataScansRunSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataplexProjectsLocationsDataScansRunRequest extends SpeakeasyBase {
    pathParams: DataplexProjectsLocationsDataScansRunPathParams;
    queryParams: DataplexProjectsLocationsDataScansRunQueryParams;
    request?: Map<string, any>;
    security: DataplexProjectsLocationsDataScansRunSecurity;
}
export declare class DataplexProjectsLocationsDataScansRunResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDataplexV1RunDataScanResponse?: shared.GoogleCloudDataplexV1RunDataScanResponse;
    statusCode: number;
}
