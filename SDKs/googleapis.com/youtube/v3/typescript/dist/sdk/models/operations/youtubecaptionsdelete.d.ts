import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeCaptionsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    id: string;
    key?: string;
    oauthToken?: string;
    onBehalfOf?: string;
    onBehalfOfContentOwner?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeCaptionsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeCaptionsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeCaptionsDeleteSecurity extends SpeakeasyBase {
    option1?: YoutubeCaptionsDeleteSecurityOption1;
    option2?: YoutubeCaptionsDeleteSecurityOption2;
}
export declare class YoutubeCaptionsDeleteRequest extends SpeakeasyBase {
    queryParams: YoutubeCaptionsDeleteQueryParams;
    security: YoutubeCaptionsDeleteSecurity;
}
export declare class YoutubeCaptionsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
