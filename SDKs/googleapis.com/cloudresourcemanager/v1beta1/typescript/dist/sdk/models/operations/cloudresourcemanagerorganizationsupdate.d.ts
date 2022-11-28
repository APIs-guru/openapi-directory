import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerOrganizationsUpdatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudresourcemanagerOrganizationsUpdateQueryParams extends SpeakeasyBase {
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
export declare class CloudresourcemanagerOrganizationsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerOrganizationsUpdateRequest extends SpeakeasyBase {
    pathParams: CloudresourcemanagerOrganizationsUpdatePathParams;
    queryParams: CloudresourcemanagerOrganizationsUpdateQueryParams;
    request?: shared.Organization;
    security: CloudresourcemanagerOrganizationsUpdateSecurity;
}
export declare class CloudresourcemanagerOrganizationsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    organization?: shared.Organization;
    statusCode: number;
}
