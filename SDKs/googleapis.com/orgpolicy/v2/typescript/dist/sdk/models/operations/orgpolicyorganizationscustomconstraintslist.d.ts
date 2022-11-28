import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgpolicyOrganizationsCustomConstraintsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class OrgpolicyOrganizationsCustomConstraintsListQueryParams extends SpeakeasyBase {
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
export declare class OrgpolicyOrganizationsCustomConstraintsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OrgpolicyOrganizationsCustomConstraintsListRequest extends SpeakeasyBase {
    pathParams: OrgpolicyOrganizationsCustomConstraintsListPathParams;
    queryParams: OrgpolicyOrganizationsCustomConstraintsListQueryParams;
    security: OrgpolicyOrganizationsCustomConstraintsListSecurity;
}
export declare class OrgpolicyOrganizationsCustomConstraintsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudOrgpolicyV2ListCustomConstraintsResponse?: shared.GoogleCloudOrgpolicyV2ListCustomConstraintsResponse;
    statusCode: number;
}
