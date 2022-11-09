import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TranscoderProjectsLocationsJobTemplatesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TranscoderProjectsLocationsJobTemplatesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    jobTemplateId?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TranscoderProjectsLocationsJobTemplatesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TranscoderProjectsLocationsJobTemplatesCreateRequest extends SpeakeasyBase {
    pathParams: TranscoderProjectsLocationsJobTemplatesCreatePathParams;
    queryParams: TranscoderProjectsLocationsJobTemplatesCreateQueryParams;
    request?: shared.JobTemplate;
    security: TranscoderProjectsLocationsJobTemplatesCreateSecurity;
}
export declare class TranscoderProjectsLocationsJobTemplatesCreateResponse extends SpeakeasyBase {
    contentType: string;
    jobTemplate?: shared.JobTemplate;
    statusCode: number;
}
