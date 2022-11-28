import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudidentityOrgUnitsMembershipsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudidentityOrgUnitsMembershipsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    customer?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudidentityOrgUnitsMembershipsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityOrgUnitsMembershipsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityOrgUnitsMembershipsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityOrgUnitsMembershipsListSecurity extends SpeakeasyBase {
    option1?: CloudidentityOrgUnitsMembershipsListSecurityOption1;
    option2?: CloudidentityOrgUnitsMembershipsListSecurityOption2;
    option3?: CloudidentityOrgUnitsMembershipsListSecurityOption3;
}
export declare class CloudidentityOrgUnitsMembershipsListRequest extends SpeakeasyBase {
    pathParams: CloudidentityOrgUnitsMembershipsListPathParams;
    queryParams: CloudidentityOrgUnitsMembershipsListQueryParams;
    security: CloudidentityOrgUnitsMembershipsListSecurity;
}
export declare class CloudidentityOrgUnitsMembershipsListResponse extends SpeakeasyBase {
    contentType: string;
    listOrgMembershipsResponse?: shared.ListOrgMembershipsResponse;
    statusCode: number;
}
