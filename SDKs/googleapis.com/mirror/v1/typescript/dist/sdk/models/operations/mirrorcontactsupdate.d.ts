import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MirrorContactsUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class MirrorContactsUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class MirrorContactsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MirrorContactsUpdateRequest extends SpeakeasyBase {
    pathParams: MirrorContactsUpdatePathParams;
    queryParams: MirrorContactsUpdateQueryParams;
    request?: shared.Contact;
    security: MirrorContactsUpdateSecurity;
}
export declare class MirrorContactsUpdateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
