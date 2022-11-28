import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MirrorContactsDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class MirrorContactsDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class MirrorContactsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MirrorContactsDeleteRequest extends SpeakeasyBase {
    pathParams: MirrorContactsDeletePathParams;
    queryParams: MirrorContactsDeleteQueryParams;
    security: MirrorContactsDeleteSecurity;
}
export declare class MirrorContactsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
