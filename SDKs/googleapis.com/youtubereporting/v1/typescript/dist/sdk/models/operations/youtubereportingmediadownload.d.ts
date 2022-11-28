import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubereportingMediaDownloadPathParams extends SpeakeasyBase {
    resourceName: string;
}
export declare class YoutubereportingMediaDownloadQueryParams extends SpeakeasyBase {
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
export declare class YoutubereportingMediaDownloadSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubereportingMediaDownloadSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class YoutubereportingMediaDownloadSecurity extends SpeakeasyBase {
    option1?: YoutubereportingMediaDownloadSecurityOption1;
    option2?: YoutubereportingMediaDownloadSecurityOption2;
}
export declare class YoutubereportingMediaDownloadRequest extends SpeakeasyBase {
    pathParams: YoutubereportingMediaDownloadPathParams;
    queryParams: YoutubereportingMediaDownloadQueryParams;
    security: YoutubereportingMediaDownloadSecurity;
}
export declare class YoutubereportingMediaDownloadResponse extends SpeakeasyBase {
    contentType: string;
    gdataMedia?: shared.GdataMedia;
    statusCode: number;
}
