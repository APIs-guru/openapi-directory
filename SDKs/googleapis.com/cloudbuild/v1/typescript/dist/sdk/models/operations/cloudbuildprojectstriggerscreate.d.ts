import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudbuildProjectsTriggersCreatePathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class CloudbuildProjectsTriggersCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    parent?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudbuildProjectsTriggersCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbuildProjectsTriggersCreateRequest extends SpeakeasyBase {
    pathParams: CloudbuildProjectsTriggersCreatePathParams;
    queryParams: CloudbuildProjectsTriggersCreateQueryParams;
    request?: shared.BuildTriggerInput;
    security: CloudbuildProjectsTriggersCreateSecurity;
}
export declare class CloudbuildProjectsTriggersCreateResponse extends SpeakeasyBase {
    buildTrigger?: shared.BuildTrigger;
    contentType: string;
    statusCode: number;
}
