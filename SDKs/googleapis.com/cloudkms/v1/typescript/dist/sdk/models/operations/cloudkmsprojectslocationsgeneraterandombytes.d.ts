import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudkmsProjectsLocationsGenerateRandomBytesPathParams extends SpeakeasyBase {
    location: string;
}
export declare class CloudkmsProjectsLocationsGenerateRandomBytesQueryParams extends SpeakeasyBase {
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
export declare class CloudkmsProjectsLocationsGenerateRandomBytesSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsGenerateRandomBytesSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsGenerateRandomBytesSecurity extends SpeakeasyBase {
    option1?: CloudkmsProjectsLocationsGenerateRandomBytesSecurityOption1;
    option2?: CloudkmsProjectsLocationsGenerateRandomBytesSecurityOption2;
}
export declare class CloudkmsProjectsLocationsGenerateRandomBytesRequest extends SpeakeasyBase {
    pathParams: CloudkmsProjectsLocationsGenerateRandomBytesPathParams;
    queryParams: CloudkmsProjectsLocationsGenerateRandomBytesQueryParams;
    request?: shared.GenerateRandomBytesRequest;
    security: CloudkmsProjectsLocationsGenerateRandomBytesSecurity;
}
export declare class CloudkmsProjectsLocationsGenerateRandomBytesResponse extends SpeakeasyBase {
    contentType: string;
    generateRandomBytesResponse?: shared.GenerateRandomBytesResponse;
    statusCode: number;
}
