import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudidentityGroupsMembershipsSearchTransitiveGroupsPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudidentityGroupsMembershipsSearchTransitiveGroupsQueryParams extends SpeakeasyBase {
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
}
export declare class CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurity extends SpeakeasyBase {
    option1?: CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption1;
    option2?: CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption2;
    option3?: CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption3;
}
export declare class CloudidentityGroupsMembershipsSearchTransitiveGroupsRequest extends SpeakeasyBase {
    pathParams: CloudidentityGroupsMembershipsSearchTransitiveGroupsPathParams;
    queryParams: CloudidentityGroupsMembershipsSearchTransitiveGroupsQueryParams;
    security: CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurity;
}
export declare class CloudidentityGroupsMembershipsSearchTransitiveGroupsResponse extends SpeakeasyBase {
    contentType: string;
    searchTransitiveGroupsResponse?: shared.SearchTransitiveGroupsResponse;
    statusCode: number;
}
