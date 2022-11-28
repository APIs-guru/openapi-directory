import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerProjectsCreateQueryParams extends SpeakeasyBase {
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
export declare class CloudresourcemanagerProjectsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerProjectsCreateRequest extends SpeakeasyBase {
    queryParams: CloudresourcemanagerProjectsCreateQueryParams;
    request?: shared.Project;
    security: CloudresourcemanagerProjectsCreateSecurity;
}
export declare class CloudresourcemanagerProjectsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
