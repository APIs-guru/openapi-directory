import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersWorkspacesZonesRevertPathParams extends SpeakeasyBase {
    path: string;
}
export declare class TagmanagerAccountsContainersWorkspacesZonesRevertQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    fingerprint?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TagmanagerAccountsContainersWorkspacesZonesRevertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersWorkspacesZonesRevertRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersWorkspacesZonesRevertPathParams;
    queryParams: TagmanagerAccountsContainersWorkspacesZonesRevertQueryParams;
    security: TagmanagerAccountsContainersWorkspacesZonesRevertSecurity;
}
export declare class TagmanagerAccountsContainersWorkspacesZonesRevertResponse extends SpeakeasyBase {
    contentType: string;
    revertZoneResponse?: shared.RevertZoneResponse;
    statusCode: number;
}
