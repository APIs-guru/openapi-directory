import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoFirstAndThirdPartyAudiencesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    advertiserId?: string;
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
export declare class DisplayvideoFirstAndThirdPartyAudiencesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoFirstAndThirdPartyAudiencesCreateRequest extends SpeakeasyBase {
    queryParams: DisplayvideoFirstAndThirdPartyAudiencesCreateQueryParams;
    request?: shared.FirstAndThirdPartyAudienceInput;
    security: DisplayvideoFirstAndThirdPartyAudiencesCreateSecurity;
}
export declare class DisplayvideoFirstAndThirdPartyAudiencesCreateResponse extends SpeakeasyBase {
    contentType: string;
    firstAndThirdPartyAudience?: shared.FirstAndThirdPartyAudience;
    statusCode: number;
}
