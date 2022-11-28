import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecuritycenterProjectsSourcesFindingsGroupPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SecuritycenterProjectsSourcesFindingsGroupQueryParams extends SpeakeasyBase {
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
export declare class SecuritycenterProjectsSourcesFindingsGroupSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecuritycenterProjectsSourcesFindingsGroupRequest extends SpeakeasyBase {
    pathParams: SecuritycenterProjectsSourcesFindingsGroupPathParams;
    queryParams: SecuritycenterProjectsSourcesFindingsGroupQueryParams;
    request?: shared.GroupFindingsRequest;
    security: SecuritycenterProjectsSourcesFindingsGroupSecurity;
}
export declare class SecuritycenterProjectsSourcesFindingsGroupResponse extends SpeakeasyBase {
    contentType: string;
    groupFindingsResponse?: shared.GroupFindingsResponse;
    statusCode: number;
}
