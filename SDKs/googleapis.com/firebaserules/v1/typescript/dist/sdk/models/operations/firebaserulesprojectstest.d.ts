import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebaserulesProjectsTestPathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirebaserulesProjectsTestQueryParams extends SpeakeasyBase {
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
export declare class FirebaserulesProjectsTestSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaserulesProjectsTestSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaserulesProjectsTestSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaserulesProjectsTestSecurity extends SpeakeasyBase {
    option1?: FirebaserulesProjectsTestSecurityOption1;
    option2?: FirebaserulesProjectsTestSecurityOption2;
    option3?: FirebaserulesProjectsTestSecurityOption3;
}
export declare class FirebaserulesProjectsTestRequest extends SpeakeasyBase {
    pathParams: FirebaserulesProjectsTestPathParams;
    queryParams: FirebaserulesProjectsTestQueryParams;
    request?: shared.TestRulesetRequest;
    security: FirebaserulesProjectsTestSecurity;
}
export declare class FirebaserulesProjectsTestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testRulesetResponse?: shared.TestRulesetResponse;
}
