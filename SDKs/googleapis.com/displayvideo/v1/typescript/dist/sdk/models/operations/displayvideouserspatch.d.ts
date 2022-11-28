import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoUsersPatchPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class DisplayvideoUsersPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DisplayvideoUsersPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoUsersPatchRequest extends SpeakeasyBase {
    pathParams: DisplayvideoUsersPatchPathParams;
    queryParams: DisplayvideoUsersPatchQueryParams;
    request?: shared.UserInput;
    security: DisplayvideoUsersPatchSecurity;
}
export declare class DisplayvideoUsersPatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    user?: shared.User;
}
