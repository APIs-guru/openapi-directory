import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MirrorTimelineGetPathParams extends SpeakeasyBase {
    id: string;
}
export declare class MirrorTimelineGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class MirrorTimelineGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MirrorTimelineGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MirrorTimelineGetSecurity extends SpeakeasyBase {
    option1?: MirrorTimelineGetSecurityOption1;
    option2?: MirrorTimelineGetSecurityOption2;
}
export declare class MirrorTimelineGetRequest extends SpeakeasyBase {
    pathParams: MirrorTimelineGetPathParams;
    queryParams: MirrorTimelineGetQueryParams;
    security: MirrorTimelineGetSecurity;
}
export declare class MirrorTimelineGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
