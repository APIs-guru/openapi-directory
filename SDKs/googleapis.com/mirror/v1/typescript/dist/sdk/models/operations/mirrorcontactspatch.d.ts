import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MirrorContactsPatchPathParams extends SpeakeasyBase {
    id: string;
}
export declare class MirrorContactsPatchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class MirrorContactsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MirrorContactsPatchRequest extends SpeakeasyBase {
    pathParams: MirrorContactsPatchPathParams;
    queryParams: MirrorContactsPatchQueryParams;
    request?: shared.Contact;
    security: MirrorContactsPatchSecurity;
}
export declare class MirrorContactsPatchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
