import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SecuritycenterOrganizationsAssetsGroupPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SecuritycenterOrganizationsAssetsGroupQueryParams extends SpeakeasyBase {
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
export declare class SecuritycenterOrganizationsAssetsGroupSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecuritycenterOrganizationsAssetsGroupRequest extends SpeakeasyBase {
    pathParams: SecuritycenterOrganizationsAssetsGroupPathParams;
    queryParams: SecuritycenterOrganizationsAssetsGroupQueryParams;
    request?: shared.GroupAssetsRequest;
    security: SecuritycenterOrganizationsAssetsGroupSecurity;
}
export declare class SecuritycenterOrganizationsAssetsGroupResponse extends SpeakeasyBase {
    contentType: string;
    groupAssetsResponse?: shared.GroupAssetsResponse;
    statusCode: number;
}
