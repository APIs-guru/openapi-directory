import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerFoldersSearchQueryParams extends SpeakeasyBase {
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
export declare class CloudresourcemanagerFoldersSearchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerFoldersSearchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerFoldersSearchSecurity extends SpeakeasyBase {
    option1?: CloudresourcemanagerFoldersSearchSecurityOption1;
    option2?: CloudresourcemanagerFoldersSearchSecurityOption2;
}
export declare class CloudresourcemanagerFoldersSearchRequest extends SpeakeasyBase {
    queryParams: CloudresourcemanagerFoldersSearchQueryParams;
    request?: shared.SearchFoldersRequest;
    security: CloudresourcemanagerFoldersSearchSecurity;
}
export declare class CloudresourcemanagerFoldersSearchResponse extends SpeakeasyBase {
    contentType: string;
    searchFoldersResponse?: shared.SearchFoldersResponse;
    statusCode: number;
}
