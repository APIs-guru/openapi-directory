import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class OrgpolicyProjectsConstraintsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class OrgpolicyProjectsConstraintsListQueryParams extends SpeakeasyBase {
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
export declare class OrgpolicyProjectsConstraintsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OrgpolicyProjectsConstraintsListRequest extends SpeakeasyBase {
    pathParams: OrgpolicyProjectsConstraintsListPathParams;
    queryParams: OrgpolicyProjectsConstraintsListQueryParams;
    security: OrgpolicyProjectsConstraintsListSecurity;
}
export declare class OrgpolicyProjectsConstraintsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudOrgpolicyV2ListConstraintsResponse?: shared.GoogleCloudOrgpolicyV2ListConstraintsResponse;
    statusCode: number;
}
