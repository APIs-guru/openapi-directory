import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersWorkspacesZonesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TagmanagerAccountsContainersWorkspacesZonesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TagmanagerAccountsContainersWorkspacesZonesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersWorkspacesZonesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersWorkspacesZonesListSecurity extends SpeakeasyBase {
    option1?: TagmanagerAccountsContainersWorkspacesZonesListSecurityOption1;
    option2?: TagmanagerAccountsContainersWorkspacesZonesListSecurityOption2;
}
export declare class TagmanagerAccountsContainersWorkspacesZonesListRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersWorkspacesZonesListPathParams;
    queryParams: TagmanagerAccountsContainersWorkspacesZonesListQueryParams;
    security: TagmanagerAccountsContainersWorkspacesZonesListSecurity;
}
export declare class TagmanagerAccountsContainersWorkspacesZonesListResponse extends SpeakeasyBase {
    contentType: string;
    listZonesResponse?: shared.ListZonesResponse;
    statusCode: number;
}
