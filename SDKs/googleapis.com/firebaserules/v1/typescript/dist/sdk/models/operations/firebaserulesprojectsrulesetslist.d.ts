import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebaserulesProjectsRulesetsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirebaserulesProjectsRulesetsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class FirebaserulesProjectsRulesetsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaserulesProjectsRulesetsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaserulesProjectsRulesetsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaserulesProjectsRulesetsListSecurity extends SpeakeasyBase {
    option1?: FirebaserulesProjectsRulesetsListSecurityOption1;
    option2?: FirebaserulesProjectsRulesetsListSecurityOption2;
    option3?: FirebaserulesProjectsRulesetsListSecurityOption3;
}
export declare class FirebaserulesProjectsRulesetsListRequest extends SpeakeasyBase {
    pathParams: FirebaserulesProjectsRulesetsListPathParams;
    queryParams: FirebaserulesProjectsRulesetsListQueryParams;
    security: FirebaserulesProjectsRulesetsListSecurity;
}
export declare class FirebaserulesProjectsRulesetsListResponse extends SpeakeasyBase {
    contentType: string;
    listRulesetsResponse?: shared.ListRulesetsResponse;
    statusCode: number;
}
