import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebaserulesProjectsRulesetsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirebaserulesProjectsRulesetsDeleteQueryParams extends SpeakeasyBase {
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
export declare class FirebaserulesProjectsRulesetsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaserulesProjectsRulesetsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaserulesProjectsRulesetsDeleteSecurity extends SpeakeasyBase {
    option1?: FirebaserulesProjectsRulesetsDeleteSecurityOption1;
    option2?: FirebaserulesProjectsRulesetsDeleteSecurityOption2;
}
export declare class FirebaserulesProjectsRulesetsDeleteRequest extends SpeakeasyBase {
    pathParams: FirebaserulesProjectsRulesetsDeletePathParams;
    queryParams: FirebaserulesProjectsRulesetsDeleteQueryParams;
    security: FirebaserulesProjectsRulesetsDeleteSecurity;
}
export declare class FirebaserulesProjectsRulesetsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
