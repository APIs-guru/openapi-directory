import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerTagValuesListQueryParams extends SpeakeasyBase {
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
export declare class CloudresourcemanagerTagValuesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerTagValuesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerTagValuesListSecurity extends SpeakeasyBase {
    option1?: CloudresourcemanagerTagValuesListSecurityOption1;
    option2?: CloudresourcemanagerTagValuesListSecurityOption2;
}
export declare class CloudresourcemanagerTagValuesListRequest extends SpeakeasyBase {
    queryParams: CloudresourcemanagerTagValuesListQueryParams;
    security: CloudresourcemanagerTagValuesListSecurity;
}
export declare class CloudresourcemanagerTagValuesListResponse extends SpeakeasyBase {
    contentType: string;
    listTagValuesResponse?: shared.ListTagValuesResponse;
    statusCode: number;
}
