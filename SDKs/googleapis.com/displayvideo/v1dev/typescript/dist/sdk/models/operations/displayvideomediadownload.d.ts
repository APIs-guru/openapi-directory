import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DisplayvideoMediaDownloadPathParams extends SpeakeasyBase {
    resourceName: string;
}
export declare class DisplayvideoMediaDownloadQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
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
export declare class DisplayvideoMediaDownloadSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoMediaDownloadSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoMediaDownloadSecurity extends SpeakeasyBase {
    option1?: DisplayvideoMediaDownloadSecurityOption1;
    option2?: DisplayvideoMediaDownloadSecurityOption2;
}
export declare class DisplayvideoMediaDownloadRequest extends SpeakeasyBase {
    pathParams: DisplayvideoMediaDownloadPathParams;
    queryParams: DisplayvideoMediaDownloadQueryParams;
    security: DisplayvideoMediaDownloadSecurity;
}
export declare class DisplayvideoMediaDownloadResponse extends SpeakeasyBase {
    contentType: string;
    googleBytestreamMedia?: shared.GoogleBytestreamMedia;
    statusCode: number;
}
