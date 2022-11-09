import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FirebaseProjectsRemoveAnalyticsPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirebaseProjectsRemoveAnalyticsQueryParams extends SpeakeasyBase {
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
export declare class FirebaseProjectsRemoveAnalyticsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsRemoveAnalyticsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsRemoveAnalyticsSecurity extends SpeakeasyBase {
    option1?: FirebaseProjectsRemoveAnalyticsSecurityOption1;
    option2?: FirebaseProjectsRemoveAnalyticsSecurityOption2;
}
export declare class FirebaseProjectsRemoveAnalyticsRequest extends SpeakeasyBase {
    pathParams: FirebaseProjectsRemoveAnalyticsPathParams;
    queryParams: FirebaseProjectsRemoveAnalyticsQueryParams;
    request?: shared.RemoveAnalyticsRequest;
    security: FirebaseProjectsRemoveAnalyticsSecurity;
}
export declare class FirebaseProjectsRemoveAnalyticsResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
