import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataplexProjectsLocationsLakesContentitemsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DataplexProjectsLocationsLakesContentitemsCreateQueryParams extends SpeakeasyBase {
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
export declare class DataplexProjectsLocationsLakesContentitemsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataplexProjectsLocationsLakesContentitemsCreateRequest extends SpeakeasyBase {
    pathParams: DataplexProjectsLocationsLakesContentitemsCreatePathParams;
    queryParams: DataplexProjectsLocationsLakesContentitemsCreateQueryParams;
    request?: shared.GoogleCloudDataplexV1ContentInput;
    security: DataplexProjectsLocationsLakesContentitemsCreateSecurity;
}
export declare class DataplexProjectsLocationsLakesContentitemsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDataplexV1Content?: shared.GoogleCloudDataplexV1Content;
    statusCode: number;
}
