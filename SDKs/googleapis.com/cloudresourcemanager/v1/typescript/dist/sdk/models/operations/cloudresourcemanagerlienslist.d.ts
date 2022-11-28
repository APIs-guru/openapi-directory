import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerLiensListQueryParams extends SpeakeasyBase {
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
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudresourcemanagerLiensListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerLiensListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerLiensListSecurity extends SpeakeasyBase {
    option1?: CloudresourcemanagerLiensListSecurityOption1;
    option2?: CloudresourcemanagerLiensListSecurityOption2;
}
export declare class CloudresourcemanagerLiensListRequest extends SpeakeasyBase {
    queryParams: CloudresourcemanagerLiensListQueryParams;
    security: CloudresourcemanagerLiensListSecurity;
}
export declare class CloudresourcemanagerLiensListResponse extends SpeakeasyBase {
    contentType: string;
    listLiensResponse?: shared.ListLiensResponse;
    statusCode: number;
}
