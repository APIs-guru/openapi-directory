import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebasemlProjectsModelsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirebasemlProjectsModelsCreateQueryParams extends SpeakeasyBase {
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
export declare class FirebasemlProjectsModelsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasemlProjectsModelsCreateRequest extends SpeakeasyBase {
    pathParams: FirebasemlProjectsModelsCreatePathParams;
    queryParams: FirebasemlProjectsModelsCreateQueryParams;
    request?: shared.ModelInput;
    security: FirebasemlProjectsModelsCreateSecurity;
}
export declare class FirebasemlProjectsModelsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
