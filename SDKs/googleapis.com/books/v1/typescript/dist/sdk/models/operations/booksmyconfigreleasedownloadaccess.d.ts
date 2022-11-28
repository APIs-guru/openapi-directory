import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BooksMyconfigReleaseDownloadAccessQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    cpksver: string;
    fields?: string;
    key?: string;
    locale?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    source?: string;
    uploadType?: string;
    uploadProtocol?: string;
    volumeIds: string[];
}
export declare class BooksMyconfigReleaseDownloadAccessSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BooksMyconfigReleaseDownloadAccessRequest extends SpeakeasyBase {
    queryParams: BooksMyconfigReleaseDownloadAccessQueryParams;
    security: BooksMyconfigReleaseDownloadAccessSecurity;
}
export declare class BooksMyconfigReleaseDownloadAccessResponse extends SpeakeasyBase {
    contentType: string;
    downloadAccesses?: shared.DownloadAccesses;
    statusCode: number;
}
