import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MirrorLocationsGetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class MirrorLocationsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class MirrorLocationsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MirrorLocationsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MirrorLocationsGetSecurity extends SpeakeasyBase {
    option1?: MirrorLocationsGetSecurityOption1;
    option2?: MirrorLocationsGetSecurityOption2;
}
export declare class MirrorLocationsGetRequest extends SpeakeasyBase {
    pathParams: MirrorLocationsGetPathParams;
    queryParams: MirrorLocationsGetQueryParams;
    security: MirrorLocationsGetSecurity;
}
export declare class MirrorLocationsGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
