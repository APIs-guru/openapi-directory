import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecuritycenterOrganizationsSourcesFindingsGroupPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SecuritycenterOrganizationsSourcesFindingsGroupQueryParams extends SpeakeasyBase {
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
export declare class SecuritycenterOrganizationsSourcesFindingsGroupSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecuritycenterOrganizationsSourcesFindingsGroupRequest extends SpeakeasyBase {
    pathParams: SecuritycenterOrganizationsSourcesFindingsGroupPathParams;
    queryParams: SecuritycenterOrganizationsSourcesFindingsGroupQueryParams;
    request?: shared.GroupFindingsRequest;
    security: SecuritycenterOrganizationsSourcesFindingsGroupSecurity;
}
export declare class SecuritycenterOrganizationsSourcesFindingsGroupResponse extends SpeakeasyBase {
    contentType: string;
    groupFindingsResponse?: shared.GroupFindingsResponse;
    statusCode: number;
}
