import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudidentityGroupsMembershipsSearchTransitiveMembershipsPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudidentityGroupsMembershipsSearchTransitiveMembershipsQueryParams extends SpeakeasyBase {
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
}
export declare class CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurity extends SpeakeasyBase {
    option1?: CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption1;
    option2?: CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption2;
    option3?: CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption3;
}
export declare class CloudidentityGroupsMembershipsSearchTransitiveMembershipsRequest extends SpeakeasyBase {
    pathParams: CloudidentityGroupsMembershipsSearchTransitiveMembershipsPathParams;
    queryParams: CloudidentityGroupsMembershipsSearchTransitiveMembershipsQueryParams;
    security: CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurity;
}
export declare class CloudidentityGroupsMembershipsSearchTransitiveMembershipsResponse extends SpeakeasyBase {
    contentType: string;
    searchTransitiveMembershipsResponse?: shared.SearchTransitiveMembershipsResponse;
    statusCode: number;
}
