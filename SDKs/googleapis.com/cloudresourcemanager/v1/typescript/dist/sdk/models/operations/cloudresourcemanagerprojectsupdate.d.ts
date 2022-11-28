import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerProjectsUpdatePathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class CloudresourcemanagerProjectsUpdateQueryParams extends SpeakeasyBase {
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
export declare class CloudresourcemanagerProjectsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerProjectsUpdateRequest extends SpeakeasyBase {
    pathParams: CloudresourcemanagerProjectsUpdatePathParams;
    queryParams: CloudresourcemanagerProjectsUpdateQueryParams;
    request?: shared.Project;
    security: CloudresourcemanagerProjectsUpdateSecurity;
}
export declare class CloudresourcemanagerProjectsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    project?: shared.Project;
    statusCode: number;
}
