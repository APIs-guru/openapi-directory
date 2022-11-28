import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerProjectsGetPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class CloudresourcemanagerProjectsGetQueryParams extends SpeakeasyBase {
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
export declare class CloudresourcemanagerProjectsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerProjectsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerProjectsGetSecurity extends SpeakeasyBase {
    option1?: CloudresourcemanagerProjectsGetSecurityOption1;
    option2?: CloudresourcemanagerProjectsGetSecurityOption2;
}
export declare class CloudresourcemanagerProjectsGetRequest extends SpeakeasyBase {
    pathParams: CloudresourcemanagerProjectsGetPathParams;
    queryParams: CloudresourcemanagerProjectsGetQueryParams;
    security: CloudresourcemanagerProjectsGetSecurity;
}
export declare class CloudresourcemanagerProjectsGetResponse extends SpeakeasyBase {
    contentType: string;
    project?: shared.Project;
    statusCode: number;
}
