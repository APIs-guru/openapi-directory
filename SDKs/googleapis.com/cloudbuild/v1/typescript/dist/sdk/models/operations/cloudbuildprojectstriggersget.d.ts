import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudbuildProjectsTriggersGetPathParams extends SpeakeasyBase {
    projectId: string;
    triggerId: string;
}
export declare class CloudbuildProjectsTriggersGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    name?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudbuildProjectsTriggersGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbuildProjectsTriggersGetRequest extends SpeakeasyBase {
    pathParams: CloudbuildProjectsTriggersGetPathParams;
    queryParams: CloudbuildProjectsTriggersGetQueryParams;
    security: CloudbuildProjectsTriggersGetSecurity;
}
export declare class CloudbuildProjectsTriggersGetResponse extends SpeakeasyBase {
    buildTrigger?: shared.BuildTrigger;
    contentType: string;
    statusCode: number;
}
