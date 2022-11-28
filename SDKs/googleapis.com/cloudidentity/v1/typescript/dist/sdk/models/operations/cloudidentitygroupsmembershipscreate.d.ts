import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudidentityGroupsMembershipsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudidentityGroupsMembershipsCreateQueryParams extends SpeakeasyBase {
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
export declare class CloudidentityGroupsMembershipsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityGroupsMembershipsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityGroupsMembershipsCreateSecurity extends SpeakeasyBase {
    option1?: CloudidentityGroupsMembershipsCreateSecurityOption1;
    option2?: CloudidentityGroupsMembershipsCreateSecurityOption2;
}
export declare class CloudidentityGroupsMembershipsCreateRequest extends SpeakeasyBase {
    pathParams: CloudidentityGroupsMembershipsCreatePathParams;
    queryParams: CloudidentityGroupsMembershipsCreateQueryParams;
    request?: shared.MembershipInput;
    security: CloudidentityGroupsMembershipsCreateSecurity;
}
export declare class CloudidentityGroupsMembershipsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
