import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebasehostingSitesVersionsClonePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirebasehostingSitesVersionsCloneQueryParams extends SpeakeasyBase {
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
export declare class FirebasehostingSitesVersionsCloneSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesVersionsCloneSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasehostingSitesVersionsCloneSecurity extends SpeakeasyBase {
    option1?: FirebasehostingSitesVersionsCloneSecurityOption1;
    option2?: FirebasehostingSitesVersionsCloneSecurityOption2;
}
export declare class FirebasehostingSitesVersionsCloneRequest extends SpeakeasyBase {
    pathParams: FirebasehostingSitesVersionsClonePathParams;
    queryParams: FirebasehostingSitesVersionsCloneQueryParams;
    request?: shared.CloneVersionRequest;
    security: FirebasehostingSitesVersionsCloneSecurity;
}
export declare class FirebasehostingSitesVersionsCloneResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
