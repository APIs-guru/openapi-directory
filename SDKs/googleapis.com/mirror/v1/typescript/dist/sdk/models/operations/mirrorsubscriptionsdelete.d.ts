import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MirrorSubscriptionsDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class MirrorSubscriptionsDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class MirrorSubscriptionsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MirrorSubscriptionsDeleteRequest extends SpeakeasyBase {
    pathParams: MirrorSubscriptionsDeletePathParams;
    queryParams: MirrorSubscriptionsDeleteQueryParams;
    security: MirrorSubscriptionsDeleteSecurity;
}
export declare class MirrorSubscriptionsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
