import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerTagKeysListQueryParams extends SpeakeasyBase {
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
export declare class CloudresourcemanagerTagKeysListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerTagKeysListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerTagKeysListSecurity extends SpeakeasyBase {
    option1?: CloudresourcemanagerTagKeysListSecurityOption1;
    option2?: CloudresourcemanagerTagKeysListSecurityOption2;
}
export declare class CloudresourcemanagerTagKeysListRequest extends SpeakeasyBase {
    queryParams: CloudresourcemanagerTagKeysListQueryParams;
    security: CloudresourcemanagerTagKeysListSecurity;
}
export declare class CloudresourcemanagerTagKeysListResponse extends SpeakeasyBase {
    contentType: string;
    listTagKeysResponse?: shared.ListTagKeysResponse;
    statusCode: number;
}
