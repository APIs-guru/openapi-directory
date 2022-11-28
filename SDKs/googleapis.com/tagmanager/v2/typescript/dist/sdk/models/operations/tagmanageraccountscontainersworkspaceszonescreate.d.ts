import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersWorkspacesZonesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TagmanagerAccountsContainersWorkspacesZonesCreateQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersWorkspacesZonesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersWorkspacesZonesCreateRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersWorkspacesZonesCreatePathParams;
    queryParams: TagmanagerAccountsContainersWorkspacesZonesCreateQueryParams;
    request?: shared.Zone;
    security: TagmanagerAccountsContainersWorkspacesZonesCreateSecurity;
}
export declare class TagmanagerAccountsContainersWorkspacesZonesCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    zone?: shared.Zone;
}
