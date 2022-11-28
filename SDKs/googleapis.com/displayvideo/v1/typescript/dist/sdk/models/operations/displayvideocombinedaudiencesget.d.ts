import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoCombinedAudiencesGetPathParams extends SpeakeasyBase {
    combinedAudienceId: string;
}
export declare class DisplayvideoCombinedAudiencesGetQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoCombinedAudiencesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoCombinedAudiencesGetRequest extends SpeakeasyBase {
    pathParams: DisplayvideoCombinedAudiencesGetPathParams;
    queryParams: DisplayvideoCombinedAudiencesGetQueryParams;
    security: DisplayvideoCombinedAudiencesGetSecurity;
}
export declare class DisplayvideoCombinedAudiencesGetResponse extends SpeakeasyBase {
    combinedAudience?: shared.CombinedAudience;
    contentType: string;
    statusCode: number;
}
