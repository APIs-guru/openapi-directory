import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MirrorTimelineDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class MirrorTimelineDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class MirrorTimelineDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MirrorTimelineDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MirrorTimelineDeleteSecurity extends SpeakeasyBase {
    option1?: MirrorTimelineDeleteSecurityOption1;
    option2?: MirrorTimelineDeleteSecurityOption2;
}
export declare class MirrorTimelineDeleteRequest extends SpeakeasyBase {
    pathParams: MirrorTimelineDeletePathParams;
    queryParams: MirrorTimelineDeleteQueryParams;
    security: MirrorTimelineDeleteSecurity;
}
export declare class MirrorTimelineDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
