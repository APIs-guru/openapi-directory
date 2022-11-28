import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataplexProjectsLocationsLakesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DataplexProjectsLocationsLakesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    lakeId?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    validateOnly?: boolean;
}
export declare class DataplexProjectsLocationsLakesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataplexProjectsLocationsLakesCreateRequest extends SpeakeasyBase {
    pathParams: DataplexProjectsLocationsLakesCreatePathParams;
    queryParams: DataplexProjectsLocationsLakesCreateQueryParams;
    request?: shared.GoogleCloudDataplexV1LakeInput;
    security: DataplexProjectsLocationsLakesCreateSecurity;
}
export declare class DataplexProjectsLocationsLakesCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
