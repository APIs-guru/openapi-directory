import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeCaptionsInsertQueryParams extends SpeakeasyBase {
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
export declare class YoutubeCaptionsInsertRequests extends SpeakeasyBase {
    applicationOctetStream: Uint8Array;
    textXml: Uint8Array;
}
export declare class YoutubeCaptionsInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeCaptionsInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeCaptionsInsertSecurity extends SpeakeasyBase {
    option1?: YoutubeCaptionsInsertSecurityOption1;
    option2?: YoutubeCaptionsInsertSecurityOption2;
}
export declare class YoutubeCaptionsInsertRequest extends SpeakeasyBase {
    queryParams: YoutubeCaptionsInsertQueryParams;
    request?: YoutubeCaptionsInsertRequests;
    security: YoutubeCaptionsInsertSecurity;
}
export declare class YoutubeCaptionsInsertResponse extends SpeakeasyBase {
    caption?: shared.Caption;
    contentType: string;
    statusCode: number;
}
