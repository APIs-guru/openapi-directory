import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VaultMattersAddPermissionsPathParams extends SpeakeasyBase {
    matterId: string;
}
export declare class VaultMattersAddPermissionsQueryParams extends SpeakeasyBase {
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
export declare class VaultMattersAddPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VaultMattersAddPermissionsRequest extends SpeakeasyBase {
    pathParams: VaultMattersAddPermissionsPathParams;
    queryParams: VaultMattersAddPermissionsQueryParams;
    request?: shared.AddMatterPermissionsRequest;
    security: VaultMattersAddPermissionsSecurity;
}
export declare class VaultMattersAddPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    matterPermission?: shared.MatterPermission;
    statusCode: number;
}
