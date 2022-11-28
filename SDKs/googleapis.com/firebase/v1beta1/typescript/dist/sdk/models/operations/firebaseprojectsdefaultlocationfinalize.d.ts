import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebaseProjectsDefaultLocationFinalizePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirebaseProjectsDefaultLocationFinalizeQueryParams extends SpeakeasyBase {
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
export declare class FirebaseProjectsDefaultLocationFinalizeSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsDefaultLocationFinalizeSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsDefaultLocationFinalizeSecurity extends SpeakeasyBase {
    option1?: FirebaseProjectsDefaultLocationFinalizeSecurityOption1;
    option2?: FirebaseProjectsDefaultLocationFinalizeSecurityOption2;
}
export declare class FirebaseProjectsDefaultLocationFinalizeRequest extends SpeakeasyBase {
    pathParams: FirebaseProjectsDefaultLocationFinalizePathParams;
    queryParams: FirebaseProjectsDefaultLocationFinalizeQueryParams;
    request?: shared.FinalizeDefaultLocationRequest;
    security: FirebaseProjectsDefaultLocationFinalizeSecurity;
}
export declare class FirebaseProjectsDefaultLocationFinalizeResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
