import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MirrorSubscriptionsUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class MirrorSubscriptionsUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class MirrorSubscriptionsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MirrorSubscriptionsUpdateRequest extends SpeakeasyBase {
    pathParams: MirrorSubscriptionsUpdatePathParams;
    queryParams: MirrorSubscriptionsUpdateQueryParams;
    request?: shared.Subscription;
    security: MirrorSubscriptionsUpdateSecurity;
}
export declare class MirrorSubscriptionsUpdateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
