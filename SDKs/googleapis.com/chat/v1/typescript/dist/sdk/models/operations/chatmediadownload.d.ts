import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChatMediaDownloadPathParams extends SpeakeasyBase {
    resourceName: string;
}
export declare class ChatMediaDownloadQueryParams extends SpeakeasyBase {
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
export declare class ChatMediaDownloadSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ChatMediaDownloadSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ChatMediaDownloadSecurity extends SpeakeasyBase {
    option1?: ChatMediaDownloadSecurityOption1;
    option2?: ChatMediaDownloadSecurityOption2;
}
export declare class ChatMediaDownloadRequest extends SpeakeasyBase {
    pathParams: ChatMediaDownloadPathParams;
    queryParams: ChatMediaDownloadQueryParams;
    security: ChatMediaDownloadSecurity;
}
export declare class ChatMediaDownloadResponse extends SpeakeasyBase {
    contentType: string;
    media?: shared.Media;
    statusCode: number;
}
