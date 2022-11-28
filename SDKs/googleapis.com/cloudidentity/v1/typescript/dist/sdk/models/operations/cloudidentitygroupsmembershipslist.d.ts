import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudidentityGroupsMembershipsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum CloudidentityGroupsMembershipsListViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class CloudidentityGroupsMembershipsListQueryParams extends SpeakeasyBase {
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
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: CloudidentityGroupsMembershipsListViewEnum;
}
export declare class CloudidentityGroupsMembershipsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityGroupsMembershipsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityGroupsMembershipsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityGroupsMembershipsListSecurity extends SpeakeasyBase {
    option1?: CloudidentityGroupsMembershipsListSecurityOption1;
    option2?: CloudidentityGroupsMembershipsListSecurityOption2;
    option3?: CloudidentityGroupsMembershipsListSecurityOption3;
}
export declare class CloudidentityGroupsMembershipsListRequest extends SpeakeasyBase {
    pathParams: CloudidentityGroupsMembershipsListPathParams;
    queryParams: CloudidentityGroupsMembershipsListQueryParams;
    security: CloudidentityGroupsMembershipsListSecurity;
}
export declare class CloudidentityGroupsMembershipsListResponse extends SpeakeasyBase {
    contentType: string;
    listMembershipsResponse?: shared.ListMembershipsResponse;
    statusCode: number;
}
