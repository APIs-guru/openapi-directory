import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebaserulesProjectsRulesetsCreatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirebaserulesProjectsRulesetsCreateQueryParams extends SpeakeasyBase {
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
export declare class FirebaserulesProjectsRulesetsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaserulesProjectsRulesetsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaserulesProjectsRulesetsCreateSecurity extends SpeakeasyBase {
    option1?: FirebaserulesProjectsRulesetsCreateSecurityOption1;
    option2?: FirebaserulesProjectsRulesetsCreateSecurityOption2;
}
export declare class FirebaserulesProjectsRulesetsCreateRequest extends SpeakeasyBase {
    pathParams: FirebaserulesProjectsRulesetsCreatePathParams;
    queryParams: FirebaserulesProjectsRulesetsCreateQueryParams;
    request?: shared.RulesetInput;
    security: FirebaserulesProjectsRulesetsCreateSecurity;
}
export declare class FirebaserulesProjectsRulesetsCreateResponse extends SpeakeasyBase {
    contentType: string;
    ruleset?: shared.Ruleset;
    statusCode: number;
}
