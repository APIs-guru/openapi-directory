import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerTagBindingsListQueryParams extends SpeakeasyBase {
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
export declare class CloudresourcemanagerTagBindingsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerTagBindingsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerTagBindingsListSecurity extends SpeakeasyBase {
    option1?: CloudresourcemanagerTagBindingsListSecurityOption1;
    option2?: CloudresourcemanagerTagBindingsListSecurityOption2;
}
export declare class CloudresourcemanagerTagBindingsListRequest extends SpeakeasyBase {
    queryParams: CloudresourcemanagerTagBindingsListQueryParams;
    security: CloudresourcemanagerTagBindingsListSecurity;
}
export declare class CloudresourcemanagerTagBindingsListResponse extends SpeakeasyBase {
    contentType: string;
    listTagBindingsResponse?: shared.ListTagBindingsResponse;
    statusCode: number;
}
