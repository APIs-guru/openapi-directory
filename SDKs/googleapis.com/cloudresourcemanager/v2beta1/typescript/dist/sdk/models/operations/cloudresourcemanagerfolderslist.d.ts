import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerFoldersListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    parent?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    showDeleted?: boolean;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudresourcemanagerFoldersListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerFoldersListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerFoldersListSecurity extends SpeakeasyBase {
    option1?: CloudresourcemanagerFoldersListSecurityOption1;
    option2?: CloudresourcemanagerFoldersListSecurityOption2;
}
export declare class CloudresourcemanagerFoldersListRequest extends SpeakeasyBase {
    queryParams: CloudresourcemanagerFoldersListQueryParams;
    security: CloudresourcemanagerFoldersListSecurity;
}
export declare class CloudresourcemanagerFoldersListResponse extends SpeakeasyBase {
    contentType: string;
    listFoldersResponse?: shared.ListFoldersResponse;
    statusCode: number;
}
