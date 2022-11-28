import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OsconfigProjectsGuestPoliciesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class OsconfigProjectsGuestPoliciesListQueryParams extends SpeakeasyBase {
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
export declare class OsconfigProjectsGuestPoliciesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OsconfigProjectsGuestPoliciesListRequest extends SpeakeasyBase {
    pathParams: OsconfigProjectsGuestPoliciesListPathParams;
    queryParams: OsconfigProjectsGuestPoliciesListQueryParams;
    security: OsconfigProjectsGuestPoliciesListSecurity;
}
export declare class OsconfigProjectsGuestPoliciesListResponse extends SpeakeasyBase {
    contentType: string;
    listGuestPoliciesResponse?: shared.ListGuestPoliciesResponse;
    statusCode: number;
}
