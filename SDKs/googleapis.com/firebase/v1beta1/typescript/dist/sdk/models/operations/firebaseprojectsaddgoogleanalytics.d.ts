import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebaseProjectsAddGoogleAnalyticsPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirebaseProjectsAddGoogleAnalyticsQueryParams extends SpeakeasyBase {
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
export declare class FirebaseProjectsAddGoogleAnalyticsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsAddGoogleAnalyticsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsAddGoogleAnalyticsSecurity extends SpeakeasyBase {
    option1?: FirebaseProjectsAddGoogleAnalyticsSecurityOption1;
    option2?: FirebaseProjectsAddGoogleAnalyticsSecurityOption2;
}
export declare class FirebaseProjectsAddGoogleAnalyticsRequest extends SpeakeasyBase {
    pathParams: FirebaseProjectsAddGoogleAnalyticsPathParams;
    queryParams: FirebaseProjectsAddGoogleAnalyticsQueryParams;
    request?: shared.AddGoogleAnalyticsRequest;
    security: FirebaseProjectsAddGoogleAnalyticsSecurity;
}
export declare class FirebaseProjectsAddGoogleAnalyticsResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
