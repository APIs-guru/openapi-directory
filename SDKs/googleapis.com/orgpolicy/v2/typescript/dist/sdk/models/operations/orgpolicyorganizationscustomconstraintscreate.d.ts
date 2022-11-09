import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class OrgpolicyOrganizationsCustomConstraintsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class OrgpolicyOrganizationsCustomConstraintsCreateQueryParams extends SpeakeasyBase {
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
export declare class OrgpolicyOrganizationsCustomConstraintsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OrgpolicyOrganizationsCustomConstraintsCreateRequest extends SpeakeasyBase {
    pathParams: OrgpolicyOrganizationsCustomConstraintsCreatePathParams;
    queryParams: OrgpolicyOrganizationsCustomConstraintsCreateQueryParams;
    request?: shared.GoogleCloudOrgpolicyV2CustomConstraint;
    security: OrgpolicyOrganizationsCustomConstraintsCreateSecurity;
}
export declare class OrgpolicyOrganizationsCustomConstraintsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudOrgpolicyV2CustomConstraint?: shared.GoogleCloudOrgpolicyV2CustomConstraint;
    statusCode: number;
}
