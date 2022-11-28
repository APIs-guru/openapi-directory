import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudidentityGroupsMembershipsModifyMembershipRolesPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudidentityGroupsMembershipsModifyMembershipRolesQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudidentityGroupsMembershipsModifyMembershipRolesSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityGroupsMembershipsModifyMembershipRolesSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityGroupsMembershipsModifyMembershipRolesSecurity extends SpeakeasyBase {
    option1?: CloudidentityGroupsMembershipsModifyMembershipRolesSecurityOption1;
    option2?: CloudidentityGroupsMembershipsModifyMembershipRolesSecurityOption2;
}
export declare class CloudidentityGroupsMembershipsModifyMembershipRolesRequest extends SpeakeasyBase {
    pathParams: CloudidentityGroupsMembershipsModifyMembershipRolesPathParams;
    queryParams: CloudidentityGroupsMembershipsModifyMembershipRolesQueryParams;
    request?: shared.ModifyMembershipRolesRequest;
    security: CloudidentityGroupsMembershipsModifyMembershipRolesSecurity;
}
export declare class CloudidentityGroupsMembershipsModifyMembershipRolesResponse extends SpeakeasyBase {
    contentType: string;
    modifyMembershipRolesResponse?: shared.ModifyMembershipRolesResponse;
    statusCode: number;
}
