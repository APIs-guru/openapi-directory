import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoGoogleAudiencesGetPathParams extends SpeakeasyBase {
    googleAudienceId: string;
}
export declare class DisplayvideoGoogleAudiencesGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    advertiserId?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    partnerId?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DisplayvideoGoogleAudiencesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoGoogleAudiencesGetRequest extends SpeakeasyBase {
    pathParams: DisplayvideoGoogleAudiencesGetPathParams;
    queryParams: DisplayvideoGoogleAudiencesGetQueryParams;
    security: DisplayvideoGoogleAudiencesGetSecurity;
}
export declare class DisplayvideoGoogleAudiencesGetResponse extends SpeakeasyBase {
    contentType: string;
    googleAudience?: shared.GoogleAudience;
    statusCode: number;
}
