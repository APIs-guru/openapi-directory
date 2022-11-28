import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecuritycenterProjectsAssetsGroupPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class SecuritycenterProjectsAssetsGroupQueryParams extends SpeakeasyBase {
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
export declare class SecuritycenterProjectsAssetsGroupSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SecuritycenterProjectsAssetsGroupRequest extends SpeakeasyBase {
    pathParams: SecuritycenterProjectsAssetsGroupPathParams;
    queryParams: SecuritycenterProjectsAssetsGroupQueryParams;
    request?: shared.GroupAssetsRequest;
    security: SecuritycenterProjectsAssetsGroupSecurity;
}
export declare class SecuritycenterProjectsAssetsGroupResponse extends SpeakeasyBase {
    contentType: string;
    groupAssetsResponse?: shared.GroupAssetsResponse;
    statusCode: number;
}
