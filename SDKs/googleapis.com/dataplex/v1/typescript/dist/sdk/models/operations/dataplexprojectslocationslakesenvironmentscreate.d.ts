import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataplexProjectsLocationsLakesEnvironmentsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DataplexProjectsLocationsLakesEnvironmentsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    environmentId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    validateOnly?: boolean;
}
export declare class DataplexProjectsLocationsLakesEnvironmentsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataplexProjectsLocationsLakesEnvironmentsCreateRequest extends SpeakeasyBase {
    pathParams: DataplexProjectsLocationsLakesEnvironmentsCreatePathParams;
    queryParams: DataplexProjectsLocationsLakesEnvironmentsCreateQueryParams;
    request?: shared.GoogleCloudDataplexV1EnvironmentInput;
    security: DataplexProjectsLocationsLakesEnvironmentsCreateSecurity;
}
export declare class DataplexProjectsLocationsLakesEnvironmentsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
