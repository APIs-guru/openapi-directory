import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudidentityGroupsMembershipsGetMembershipGraphPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudidentityGroupsMembershipsGetMembershipGraphQueryParams extends SpeakeasyBase {
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
export declare class CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityGroupsMembershipsGetMembershipGraphSecurity extends SpeakeasyBase {
    option1?: CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption1;
    option2?: CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption2;
    option3?: CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption3;
}
export declare class CloudidentityGroupsMembershipsGetMembershipGraphRequest extends SpeakeasyBase {
    pathParams: CloudidentityGroupsMembershipsGetMembershipGraphPathParams;
    queryParams: CloudidentityGroupsMembershipsGetMembershipGraphQueryParams;
    security: CloudidentityGroupsMembershipsGetMembershipGraphSecurity;
}
export declare class CloudidentityGroupsMembershipsGetMembershipGraphResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
