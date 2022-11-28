import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebaserulesProjectsRulesetsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirebaserulesProjectsRulesetsGetQueryParams extends SpeakeasyBase {
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
export declare class FirebaserulesProjectsRulesetsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaserulesProjectsRulesetsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaserulesProjectsRulesetsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaserulesProjectsRulesetsGetSecurity extends SpeakeasyBase {
    option1?: FirebaserulesProjectsRulesetsGetSecurityOption1;
    option2?: FirebaserulesProjectsRulesetsGetSecurityOption2;
    option3?: FirebaserulesProjectsRulesetsGetSecurityOption3;
}
export declare class FirebaserulesProjectsRulesetsGetRequest extends SpeakeasyBase {
    pathParams: FirebaserulesProjectsRulesetsGetPathParams;
    queryParams: FirebaserulesProjectsRulesetsGetQueryParams;
    security: FirebaserulesProjectsRulesetsGetSecurity;
}
export declare class FirebaserulesProjectsRulesetsGetResponse extends SpeakeasyBase {
    contentType: string;
    ruleset?: shared.Ruleset;
    statusCode: number;
}
