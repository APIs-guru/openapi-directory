import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebaserulesProjectsReleasesPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirebaserulesProjectsReleasesPatchQueryParams extends SpeakeasyBase {
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
export declare class FirebaserulesProjectsReleasesPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaserulesProjectsReleasesPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaserulesProjectsReleasesPatchSecurity extends SpeakeasyBase {
    option1?: FirebaserulesProjectsReleasesPatchSecurityOption1;
    option2?: FirebaserulesProjectsReleasesPatchSecurityOption2;
}
export declare class FirebaserulesProjectsReleasesPatchRequest extends SpeakeasyBase {
    pathParams: FirebaserulesProjectsReleasesPatchPathParams;
    queryParams: FirebaserulesProjectsReleasesPatchQueryParams;
    request?: shared.UpdateReleaseRequestInput;
    security: FirebaserulesProjectsReleasesPatchSecurity;
}
export declare class FirebaserulesProjectsReleasesPatchResponse extends SpeakeasyBase {
    contentType: string;
    release?: shared.Release;
    statusCode: number;
}
