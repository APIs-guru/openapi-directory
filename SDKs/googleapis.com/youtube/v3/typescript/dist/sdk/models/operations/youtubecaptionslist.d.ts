import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeCaptionsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    id?: string[];
    key?: string;
    oauthToken?: string;
    onBehalfOf?: string;
    onBehalfOfContentOwner?: string;
    part: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    videoId: string;
}
export declare class YoutubeCaptionsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeCaptionsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeCaptionsListSecurity extends SpeakeasyBase {
    option1?: YoutubeCaptionsListSecurityOption1;
    option2?: YoutubeCaptionsListSecurityOption2;
}
export declare class YoutubeCaptionsListRequest extends SpeakeasyBase {
    queryParams: YoutubeCaptionsListQueryParams;
    security: YoutubeCaptionsListSecurity;
}
export declare class YoutubeCaptionsListResponse extends SpeakeasyBase {
    captionListResponse?: shared.CaptionListResponse;
    contentType: string;
    statusCode: number;
}
