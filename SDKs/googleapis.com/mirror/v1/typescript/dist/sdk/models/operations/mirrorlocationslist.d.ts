import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MirrorLocationsListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class MirrorLocationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MirrorLocationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MirrorLocationsListSecurity extends SpeakeasyBase {
    option1?: MirrorLocationsListSecurityOption1;
    option2?: MirrorLocationsListSecurityOption2;
}
export declare class MirrorLocationsListRequest extends SpeakeasyBase {
    queryParams: MirrorLocationsListQueryParams;
    security: MirrorLocationsListSecurity;
}
export declare class MirrorLocationsListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
