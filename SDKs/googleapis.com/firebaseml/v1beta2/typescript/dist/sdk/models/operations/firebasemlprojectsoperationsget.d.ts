import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FirebasemlProjectsOperationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirebasemlProjectsOperationsGetQueryParams extends SpeakeasyBase {
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
export declare class FirebasemlProjectsOperationsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasemlProjectsOperationsGetRequest extends SpeakeasyBase {
    pathParams: FirebasemlProjectsOperationsGetPathParams;
    queryParams: FirebasemlProjectsOperationsGetQueryParams;
    security: FirebasemlProjectsOperationsGetSecurity;
}
export declare class FirebasemlProjectsOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
