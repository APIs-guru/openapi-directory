import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeThumbnailsSetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    onBehalfOfContentOwner?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    videoId: string;
}
export declare class YoutubeThumbnailsSetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeThumbnailsSetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeThumbnailsSetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeThumbnailsSetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubeThumbnailsSetSecurity extends SpeakeasyBase {
    option1?: YoutubeThumbnailsSetSecurityOption1;
    option2?: YoutubeThumbnailsSetSecurityOption2;
    option3?: YoutubeThumbnailsSetSecurityOption3;
    option4?: YoutubeThumbnailsSetSecurityOption4;
}
export declare class YoutubeThumbnailsSetRequest extends SpeakeasyBase {
    queryParams: YoutubeThumbnailsSetQueryParams;
    security: YoutubeThumbnailsSetSecurity;
}
export declare class YoutubeThumbnailsSetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    thumbnailSetResponse?: shared.ThumbnailSetResponse;
}
