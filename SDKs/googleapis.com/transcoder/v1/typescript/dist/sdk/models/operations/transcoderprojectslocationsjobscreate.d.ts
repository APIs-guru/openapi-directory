import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TranscoderProjectsLocationsJobsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TranscoderProjectsLocationsJobsCreateQueryParams extends SpeakeasyBase {
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
export declare class TranscoderProjectsLocationsJobsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TranscoderProjectsLocationsJobsCreateRequest extends SpeakeasyBase {
    pathParams: TranscoderProjectsLocationsJobsCreatePathParams;
    queryParams: TranscoderProjectsLocationsJobsCreateQueryParams;
    request?: shared.Job;
    security: TranscoderProjectsLocationsJobsCreateSecurity;
}
export declare class TranscoderProjectsLocationsJobsCreateResponse extends SpeakeasyBase {
    contentType: string;
    job?: shared.Job;
    statusCode: number;
}
