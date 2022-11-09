import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FirebasemlProjectsModelsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirebasemlProjectsModelsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class FirebasemlProjectsModelsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasemlProjectsModelsPatchRequest extends SpeakeasyBase {
    pathParams: FirebasemlProjectsModelsPatchPathParams;
    queryParams: FirebasemlProjectsModelsPatchQueryParams;
    request?: shared.Model;
    security: FirebasemlProjectsModelsPatchSecurity;
}
export declare class FirebasemlProjectsModelsPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
