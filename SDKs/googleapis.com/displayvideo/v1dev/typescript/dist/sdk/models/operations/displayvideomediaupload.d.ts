import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DisplayvideoMediaUploadPathParams extends SpeakeasyBase {
    resourceName: string;
}
export declare class DisplayvideoMediaUploadQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoMediaUploadSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoMediaUploadSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoMediaUploadSecurity extends SpeakeasyBase {
    option1?: DisplayvideoMediaUploadSecurityOption1;
    option2?: DisplayvideoMediaUploadSecurityOption2;
}
export declare class DisplayvideoMediaUploadRequest extends SpeakeasyBase {
    pathParams: DisplayvideoMediaUploadPathParams;
    queryParams: DisplayvideoMediaUploadQueryParams;
    request?: Uint8Array;
    security: DisplayvideoMediaUploadSecurity;
}
export declare class DisplayvideoMediaUploadResponse extends SpeakeasyBase {
    contentType: string;
    googleBytestreamMedia?: shared.GoogleBytestreamMedia;
    statusCode: number;
}
