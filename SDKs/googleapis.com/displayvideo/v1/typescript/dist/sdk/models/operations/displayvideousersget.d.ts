import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoUsersGetPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class DisplayvideoUsersGetQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoUsersGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoUsersGetRequest extends SpeakeasyBase {
    pathParams: DisplayvideoUsersGetPathParams;
    queryParams: DisplayvideoUsersGetQueryParams;
    security: DisplayvideoUsersGetSecurity;
}
export declare class DisplayvideoUsersGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    user?: shared.User;
}
