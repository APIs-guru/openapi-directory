import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TranscoderProjectsLocationsJobTemplatesDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class TranscoderProjectsLocationsJobTemplatesDeleteQueryParams extends SpeakeasyBase {
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
export declare class TranscoderProjectsLocationsJobTemplatesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TranscoderProjectsLocationsJobTemplatesDeleteRequest extends SpeakeasyBase {
    pathParams: TranscoderProjectsLocationsJobTemplatesDeletePathParams;
    queryParams: TranscoderProjectsLocationsJobTemplatesDeleteQueryParams;
    security: TranscoderProjectsLocationsJobTemplatesDeleteSecurity;
}
export declare class TranscoderProjectsLocationsJobTemplatesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
