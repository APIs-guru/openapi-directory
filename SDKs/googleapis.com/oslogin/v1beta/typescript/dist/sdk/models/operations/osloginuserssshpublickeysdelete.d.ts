import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OsloginUsersSshPublicKeysDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class OsloginUsersSshPublicKeysDeleteQueryParams extends SpeakeasyBase {
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
export declare class OsloginUsersSshPublicKeysDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OsloginUsersSshPublicKeysDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OsloginUsersSshPublicKeysDeleteSecurity extends SpeakeasyBase {
    option1?: OsloginUsersSshPublicKeysDeleteSecurityOption1;
    option2?: OsloginUsersSshPublicKeysDeleteSecurityOption2;
}
export declare class OsloginUsersSshPublicKeysDeleteRequest extends SpeakeasyBase {
    pathParams: OsloginUsersSshPublicKeysDeletePathParams;
    queryParams: OsloginUsersSshPublicKeysDeleteQueryParams;
    security: OsloginUsersSshPublicKeysDeleteSecurity;
}
export declare class OsloginUsersSshPublicKeysDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
