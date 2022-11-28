import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerOrganizationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudresourcemanagerOrganizationsGetQueryParams extends SpeakeasyBase {
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
export declare class CloudresourcemanagerOrganizationsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerOrganizationsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerOrganizationsGetSecurity extends SpeakeasyBase {
    option1?: CloudresourcemanagerOrganizationsGetSecurityOption1;
    option2?: CloudresourcemanagerOrganizationsGetSecurityOption2;
}
export declare class CloudresourcemanagerOrganizationsGetRequest extends SpeakeasyBase {
    pathParams: CloudresourcemanagerOrganizationsGetPathParams;
    queryParams: CloudresourcemanagerOrganizationsGetQueryParams;
    security: CloudresourcemanagerOrganizationsGetSecurity;
}
export declare class CloudresourcemanagerOrganizationsGetResponse extends SpeakeasyBase {
    contentType: string;
    organization?: shared.Organization;
    statusCode: number;
}
