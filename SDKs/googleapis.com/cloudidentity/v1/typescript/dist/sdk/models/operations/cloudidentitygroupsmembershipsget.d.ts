import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudidentityGroupsMembershipsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudidentityGroupsMembershipsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    readMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudidentityGroupsMembershipsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityGroupsMembershipsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityGroupsMembershipsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityGroupsMembershipsGetSecurity extends SpeakeasyBase {
    option1?: CloudidentityGroupsMembershipsGetSecurityOption1;
    option2?: CloudidentityGroupsMembershipsGetSecurityOption2;
    option3?: CloudidentityGroupsMembershipsGetSecurityOption3;
}
export declare class CloudidentityGroupsMembershipsGetRequest extends SpeakeasyBase {
    pathParams: CloudidentityGroupsMembershipsGetPathParams;
    queryParams: CloudidentityGroupsMembershipsGetQueryParams;
    security: CloudidentityGroupsMembershipsGetSecurity;
}
export declare class CloudidentityGroupsMembershipsGetResponse extends SpeakeasyBase {
    contentType: string;
    membership?: shared.Membership;
    statusCode: number;
}
