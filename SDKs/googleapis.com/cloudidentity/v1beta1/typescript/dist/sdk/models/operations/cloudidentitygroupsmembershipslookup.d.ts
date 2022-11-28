import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudidentityGroupsMembershipsLookupPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudidentityGroupsMembershipsLookupQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    memberKeyId?: string;
    memberKeyNamespace?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudidentityGroupsMembershipsLookupSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityGroupsMembershipsLookupSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityGroupsMembershipsLookupSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityGroupsMembershipsLookupSecurity extends SpeakeasyBase {
    option1?: CloudidentityGroupsMembershipsLookupSecurityOption1;
    option2?: CloudidentityGroupsMembershipsLookupSecurityOption2;
    option3?: CloudidentityGroupsMembershipsLookupSecurityOption3;
}
export declare class CloudidentityGroupsMembershipsLookupRequest extends SpeakeasyBase {
    pathParams: CloudidentityGroupsMembershipsLookupPathParams;
    queryParams: CloudidentityGroupsMembershipsLookupQueryParams;
    security: CloudidentityGroupsMembershipsLookupSecurity;
}
export declare class CloudidentityGroupsMembershipsLookupResponse extends SpeakeasyBase {
    contentType: string;
    lookupMembershipNameResponse?: shared.LookupMembershipNameResponse;
    statusCode: number;
}
