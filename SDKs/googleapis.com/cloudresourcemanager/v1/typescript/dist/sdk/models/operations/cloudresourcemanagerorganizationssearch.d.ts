import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerOrganizationsSearchQueryParams extends SpeakeasyBase {
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
export declare class CloudresourcemanagerOrganizationsSearchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerOrganizationsSearchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerOrganizationsSearchSecurity extends SpeakeasyBase {
    option1?: CloudresourcemanagerOrganizationsSearchSecurityOption1;
    option2?: CloudresourcemanagerOrganizationsSearchSecurityOption2;
}
export declare class CloudresourcemanagerOrganizationsSearchRequest extends SpeakeasyBase {
    queryParams: CloudresourcemanagerOrganizationsSearchQueryParams;
    request?: shared.SearchOrganizationsRequest;
    security: CloudresourcemanagerOrganizationsSearchSecurity;
}
export declare class CloudresourcemanagerOrganizationsSearchResponse extends SpeakeasyBase {
    contentType: string;
    searchOrganizationsResponse?: shared.SearchOrganizationsResponse;
    statusCode: number;
}
