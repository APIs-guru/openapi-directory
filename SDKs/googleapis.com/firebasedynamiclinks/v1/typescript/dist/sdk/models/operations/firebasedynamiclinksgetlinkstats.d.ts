import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebasedynamiclinksGetLinkStatsPathParams extends SpeakeasyBase {
    dynamicLink: string;
}
export declare class FirebasedynamiclinksGetLinkStatsQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    durationDays?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    sdkVersion?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class FirebasedynamiclinksGetLinkStatsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasedynamiclinksGetLinkStatsRequest extends SpeakeasyBase {
    pathParams: FirebasedynamiclinksGetLinkStatsPathParams;
    queryParams: FirebasedynamiclinksGetLinkStatsQueryParams;
    security: FirebasedynamiclinksGetLinkStatsSecurity;
}
export declare class FirebasedynamiclinksGetLinkStatsResponse extends SpeakeasyBase {
    contentType: string;
    dynamicLinkStats?: shared.DynamicLinkStats;
    statusCode: number;
}
