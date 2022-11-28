import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OsconfigProjectsPatchJobsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class OsconfigProjectsPatchJobsGetQueryParams extends SpeakeasyBase {
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
export declare class OsconfigProjectsPatchJobsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OsconfigProjectsPatchJobsGetRequest extends SpeakeasyBase {
    pathParams: OsconfigProjectsPatchJobsGetPathParams;
    queryParams: OsconfigProjectsPatchJobsGetQueryParams;
    security: OsconfigProjectsPatchJobsGetSecurity;
}
export declare class OsconfigProjectsPatchJobsGetResponse extends SpeakeasyBase {
    contentType: string;
    patchJob?: shared.PatchJob;
    statusCode: number;
}
