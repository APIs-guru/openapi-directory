import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MirrorSubscriptionsInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class MirrorSubscriptionsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MirrorSubscriptionsInsertRequest extends SpeakeasyBase {
    queryParams: MirrorSubscriptionsInsertQueryParams;
    request?: shared.Subscription;
    security: MirrorSubscriptionsInsertSecurity;
}
export declare class MirrorSubscriptionsInsertResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
