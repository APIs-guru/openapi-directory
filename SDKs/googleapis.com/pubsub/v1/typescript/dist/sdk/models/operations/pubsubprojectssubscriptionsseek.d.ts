import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PubsubProjectsSubscriptionsSeekPathParams extends SpeakeasyBase {
    subscription: string;
}
export declare class PubsubProjectsSubscriptionsSeekQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PubsubProjectsSubscriptionsSeekSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsSubscriptionsSeekSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsSubscriptionsSeekSecurity extends SpeakeasyBase {
    option1?: PubsubProjectsSubscriptionsSeekSecurityOption1;
    option2?: PubsubProjectsSubscriptionsSeekSecurityOption2;
}
export declare class PubsubProjectsSubscriptionsSeekRequest extends SpeakeasyBase {
    pathParams: PubsubProjectsSubscriptionsSeekPathParams;
    queryParams: PubsubProjectsSubscriptionsSeekQueryParams;
    request?: shared.SeekRequest;
    security: PubsubProjectsSubscriptionsSeekSecurity;
}
export declare class PubsubProjectsSubscriptionsSeekResponse extends SpeakeasyBase {
    contentType: string;
    seekResponse?: Map<string, any>;
    statusCode: number;
}
