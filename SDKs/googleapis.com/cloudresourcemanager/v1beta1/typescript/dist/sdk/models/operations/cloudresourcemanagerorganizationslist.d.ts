import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerOrganizationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudresourcemanagerOrganizationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerOrganizationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerOrganizationsListSecurity extends SpeakeasyBase {
    option1?: CloudresourcemanagerOrganizationsListSecurityOption1;
    option2?: CloudresourcemanagerOrganizationsListSecurityOption2;
}
export declare class CloudresourcemanagerOrganizationsListRequest extends SpeakeasyBase {
    queryParams: CloudresourcemanagerOrganizationsListQueryParams;
    security: CloudresourcemanagerOrganizationsListSecurity;
}
export declare class CloudresourcemanagerOrganizationsListResponse extends SpeakeasyBase {
    contentType: string;
    listOrganizationsResponse?: shared.ListOrganizationsResponse;
    statusCode: number;
}
