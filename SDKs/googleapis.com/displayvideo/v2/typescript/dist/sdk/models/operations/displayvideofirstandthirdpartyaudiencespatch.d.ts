import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoFirstAndThirdPartyAudiencesPatchPathParams extends SpeakeasyBase {
    firstAndThirdPartyAudienceId: string;
}
export declare class DisplayvideoFirstAndThirdPartyAudiencesPatchQueryParams extends SpeakeasyBase {
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
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DisplayvideoFirstAndThirdPartyAudiencesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoFirstAndThirdPartyAudiencesPatchRequest extends SpeakeasyBase {
    pathParams: DisplayvideoFirstAndThirdPartyAudiencesPatchPathParams;
    queryParams: DisplayvideoFirstAndThirdPartyAudiencesPatchQueryParams;
    request?: shared.FirstAndThirdPartyAudienceInput;
    security: DisplayvideoFirstAndThirdPartyAudiencesPatchSecurity;
}
export declare class DisplayvideoFirstAndThirdPartyAudiencesPatchResponse extends SpeakeasyBase {
    contentType: string;
    firstAndThirdPartyAudience?: shared.FirstAndThirdPartyAudience;
    statusCode: number;
}
