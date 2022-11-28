import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MirrorContactsGetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class MirrorContactsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class MirrorContactsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MirrorContactsGetRequest extends SpeakeasyBase {
    pathParams: MirrorContactsGetPathParams;
    queryParams: MirrorContactsGetQueryParams;
    security: MirrorContactsGetSecurity;
}
export declare class MirrorContactsGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
