import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CloudidentityGroupsListViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class CloudidentityGroupsListQueryParams extends SpeakeasyBase {
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
    view?: CloudidentityGroupsListViewEnum;
}
export declare class CloudidentityGroupsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityGroupsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityGroupsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityGroupsListSecurity extends SpeakeasyBase {
    option1?: CloudidentityGroupsListSecurityOption1;
    option2?: CloudidentityGroupsListSecurityOption2;
    option3?: CloudidentityGroupsListSecurityOption3;
}
export declare class CloudidentityGroupsListRequest extends SpeakeasyBase {
    queryParams: CloudidentityGroupsListQueryParams;
    security: CloudidentityGroupsListSecurity;
}
export declare class CloudidentityGroupsListResponse extends SpeakeasyBase {
    contentType: string;
    listGroupsResponse?: shared.ListGroupsResponse;
    statusCode: number;
}
