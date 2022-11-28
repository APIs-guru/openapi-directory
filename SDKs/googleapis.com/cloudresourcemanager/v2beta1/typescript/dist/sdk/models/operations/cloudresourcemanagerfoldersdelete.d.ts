import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerFoldersDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudresourcemanagerFoldersDeleteQueryParams extends SpeakeasyBase {
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
export declare class CloudresourcemanagerFoldersDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerFoldersDeleteRequest extends SpeakeasyBase {
    pathParams: CloudresourcemanagerFoldersDeletePathParams;
    queryParams: CloudresourcemanagerFoldersDeleteQueryParams;
    security: CloudresourcemanagerFoldersDeleteSecurity;
}
export declare class CloudresourcemanagerFoldersDeleteResponse extends SpeakeasyBase {
    contentType: string;
    folder?: shared.Folder;
    statusCode: number;
}
