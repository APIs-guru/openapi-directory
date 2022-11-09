import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CloudidentityGroupsSearchViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class CloudidentityGroupsSearchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    query?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: CloudidentityGroupsSearchViewEnum;
}
export declare class CloudidentityGroupsSearchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityGroupsSearchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityGroupsSearchSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityGroupsSearchSecurity extends SpeakeasyBase {
    option1?: CloudidentityGroupsSearchSecurityOption1;
    option2?: CloudidentityGroupsSearchSecurityOption2;
    option3?: CloudidentityGroupsSearchSecurityOption3;
}
export declare class CloudidentityGroupsSearchRequest extends SpeakeasyBase {
    queryParams: CloudidentityGroupsSearchQueryParams;
    security: CloudidentityGroupsSearchSecurity;
}
export declare class CloudidentityGroupsSearchResponse extends SpeakeasyBase {
    contentType: string;
    searchGroupsResponse?: shared.SearchGroupsResponse;
    statusCode: number;
}
