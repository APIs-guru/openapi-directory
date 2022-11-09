import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FirebasemlOperationsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirebasemlOperationsDeleteQueryParams extends SpeakeasyBase {
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
export declare class FirebasemlOperationsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebasemlOperationsDeleteRequest extends SpeakeasyBase {
    pathParams: FirebasemlOperationsDeletePathParams;
    queryParams: FirebasemlOperationsDeleteQueryParams;
    security: FirebasemlOperationsDeleteSecurity;
}
export declare class FirebasemlOperationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
