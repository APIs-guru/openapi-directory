import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoFirstAndThirdPartyAudiencesGetPathParams extends SpeakeasyBase {
    firstAndThirdPartyAudienceId: string;
}
export declare class DisplayvideoFirstAndThirdPartyAudiencesGetQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoFirstAndThirdPartyAudiencesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoFirstAndThirdPartyAudiencesGetRequest extends SpeakeasyBase {
    pathParams: DisplayvideoFirstAndThirdPartyAudiencesGetPathParams;
    queryParams: DisplayvideoFirstAndThirdPartyAudiencesGetQueryParams;
    security: DisplayvideoFirstAndThirdPartyAudiencesGetSecurity;
}
export declare class DisplayvideoFirstAndThirdPartyAudiencesGetResponse extends SpeakeasyBase {
    contentType: string;
    firstAndThirdPartyAudience?: shared.FirstAndThirdPartyAudience;
    statusCode: number;
}
