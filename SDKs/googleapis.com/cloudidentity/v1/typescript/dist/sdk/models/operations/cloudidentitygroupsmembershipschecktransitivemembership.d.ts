import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudidentityGroupsMembershipsCheckTransitiveMembershipPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudidentityGroupsMembershipsCheckTransitiveMembershipQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    query?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurity extends SpeakeasyBase {
    option1?: CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurityOption1;
    option2?: CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurityOption2;
    option3?: CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurityOption3;
}
export declare class CloudidentityGroupsMembershipsCheckTransitiveMembershipRequest extends SpeakeasyBase {
    pathParams: CloudidentityGroupsMembershipsCheckTransitiveMembershipPathParams;
    queryParams: CloudidentityGroupsMembershipsCheckTransitiveMembershipQueryParams;
    security: CloudidentityGroupsMembershipsCheckTransitiveMembershipSecurity;
}
export declare class CloudidentityGroupsMembershipsCheckTransitiveMembershipResponse extends SpeakeasyBase {
    checkTransitiveMembershipResponse?: shared.CheckTransitiveMembershipResponse;
    contentType: string;
    statusCode: number;
}
