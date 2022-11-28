import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ScriptProjectsCreateQueryParams extends SpeakeasyBase {
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
export declare class ScriptProjectsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ScriptProjectsCreateRequest extends SpeakeasyBase {
    queryParams: ScriptProjectsCreateQueryParams;
    request?: shared.CreateProjectRequest;
    security: ScriptProjectsCreateSecurity;
}
export declare class ScriptProjectsCreateResponse extends SpeakeasyBase {
    contentType: string;
    project?: shared.Project;
    statusCode: number;
}
