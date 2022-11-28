import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IamRolesGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare enum IamRolesGetPublicKeyTypeEnum {
    TypeNone = "TYPE_NONE",
    TypeX509PemFile = "TYPE_X509_PEM_FILE",
    TypeRawPublicKey = "TYPE_RAW_PUBLIC_KEY"
}
export declare class IamRolesGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    publicKeyType?: IamRolesGetPublicKeyTypeEnum;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class IamRolesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IamRolesGetRequest extends SpeakeasyBase {
    pathParams: IamRolesGetPathParams;
    queryParams: IamRolesGetQueryParams;
    security: IamRolesGetSecurity;
}
export declare class IamRolesGetResponse extends SpeakeasyBase {
    contentType: string;
    role?: shared.Role;
    statusCode: number;
}
