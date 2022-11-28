import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerFoldersGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudresourcemanagerFoldersGetQueryParams extends SpeakeasyBase {
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
export declare class CloudresourcemanagerFoldersGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerFoldersGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerFoldersGetSecurity extends SpeakeasyBase {
    option1?: CloudresourcemanagerFoldersGetSecurityOption1;
    option2?: CloudresourcemanagerFoldersGetSecurityOption2;
}
export declare class CloudresourcemanagerFoldersGetRequest extends SpeakeasyBase {
    pathParams: CloudresourcemanagerFoldersGetPathParams;
    queryParams: CloudresourcemanagerFoldersGetQueryParams;
    security: CloudresourcemanagerFoldersGetSecurity;
}
export declare class CloudresourcemanagerFoldersGetResponse extends SpeakeasyBase {
    contentType: string;
    folder?: shared.Folder;
    statusCode: number;
}
