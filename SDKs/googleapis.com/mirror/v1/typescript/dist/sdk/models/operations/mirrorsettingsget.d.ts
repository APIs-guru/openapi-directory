import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MirrorSettingsGetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class MirrorSettingsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class MirrorSettingsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MirrorSettingsGetRequest extends SpeakeasyBase {
    pathParams: MirrorSettingsGetPathParams;
    queryParams: MirrorSettingsGetQueryParams;
    security: MirrorSettingsGetSecurity;
}
export declare class MirrorSettingsGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
