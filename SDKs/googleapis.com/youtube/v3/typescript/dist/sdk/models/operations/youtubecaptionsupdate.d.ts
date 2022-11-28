import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeCaptionsUpdateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    onBehalfOf?: string;
    onBehalfOfContentOwner?: string;
    part: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    sync?: boolean;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeCaptionsUpdateRequests extends SpeakeasyBase {
    applicationOctetStream: Uint8Array;
    textXml: Uint8Array;
}
export declare class YoutubeCaptionsUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeCaptionsUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeCaptionsUpdateSecurity extends SpeakeasyBase {
    option1?: YoutubeCaptionsUpdateSecurityOption1;
    option2?: YoutubeCaptionsUpdateSecurityOption2;
}
export declare class YoutubeCaptionsUpdateRequest extends SpeakeasyBase {
    queryParams: YoutubeCaptionsUpdateQueryParams;
    request?: YoutubeCaptionsUpdateRequests;
    security: YoutubeCaptionsUpdateSecurity;
}
export declare class YoutubeCaptionsUpdateResponse extends SpeakeasyBase {
    caption?: shared.Caption;
    contentType: string;
    statusCode: number;
}
