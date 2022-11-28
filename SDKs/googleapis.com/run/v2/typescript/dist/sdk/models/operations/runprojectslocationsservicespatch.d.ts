import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunProjectsLocationsServicesPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RunProjectsLocationsServicesPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    allowMissing?: boolean;
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
export declare class RunProjectsLocationsServicesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunProjectsLocationsServicesPatchRequest extends SpeakeasyBase {
    pathParams: RunProjectsLocationsServicesPatchPathParams;
    queryParams: RunProjectsLocationsServicesPatchQueryParams;
    request?: shared.GoogleCloudRunV2ServiceInput;
    security: RunProjectsLocationsServicesPatchSecurity;
}
export declare class RunProjectsLocationsServicesPatchResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
