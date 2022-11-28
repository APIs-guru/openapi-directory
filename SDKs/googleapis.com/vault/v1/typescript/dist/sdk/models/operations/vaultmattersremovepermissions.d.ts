import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VaultMattersRemovePermissionsPathParams extends SpeakeasyBase {
    matterId: string;
}
export declare class VaultMattersRemovePermissionsQueryParams extends SpeakeasyBase {
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
export declare class VaultMattersRemovePermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VaultMattersRemovePermissionsRequest extends SpeakeasyBase {
    pathParams: VaultMattersRemovePermissionsPathParams;
    queryParams: VaultMattersRemovePermissionsQueryParams;
    request?: shared.RemoveMatterPermissionsRequest;
    security: VaultMattersRemovePermissionsSecurity;
}
export declare class VaultMattersRemovePermissionsResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
