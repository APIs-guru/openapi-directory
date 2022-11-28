import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TranscoderProjectsLocationsJobTemplatesGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class TranscoderProjectsLocationsJobTemplatesGetQueryParams extends SpeakeasyBase {
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
export declare class TranscoderProjectsLocationsJobTemplatesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TranscoderProjectsLocationsJobTemplatesGetRequest extends SpeakeasyBase {
    pathParams: TranscoderProjectsLocationsJobTemplatesGetPathParams;
    queryParams: TranscoderProjectsLocationsJobTemplatesGetQueryParams;
    security: TranscoderProjectsLocationsJobTemplatesGetSecurity;
}
export declare class TranscoderProjectsLocationsJobTemplatesGetResponse extends SpeakeasyBase {
    contentType: string;
    jobTemplate?: shared.JobTemplate;
    statusCode: number;
}
