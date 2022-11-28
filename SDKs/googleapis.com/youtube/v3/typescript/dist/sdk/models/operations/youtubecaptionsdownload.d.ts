import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeCaptionsDownloadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class YoutubeCaptionsDownloadQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    onBehalfOf?: string;
    onBehalfOfContentOwner?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    tfmt?: string;
    tlang?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeCaptionsDownloadSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeCaptionsDownloadSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeCaptionsDownloadSecurity extends SpeakeasyBase {
    option1?: YoutubeCaptionsDownloadSecurityOption1;
    option2?: YoutubeCaptionsDownloadSecurityOption2;
}
export declare class YoutubeCaptionsDownloadRequest extends SpeakeasyBase {
    pathParams: YoutubeCaptionsDownloadPathParams;
    queryParams: YoutubeCaptionsDownloadQueryParams;
    security: YoutubeCaptionsDownloadSecurity;
}
export declare class YoutubeCaptionsDownloadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
