import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudbuildProjectsTriggersDeletePathParams extends SpeakeasyBase {
    projectId: string;
    triggerId: string;
}
export declare class CloudbuildProjectsTriggersDeleteQueryParams extends SpeakeasyBase {
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
export declare class CloudbuildProjectsTriggersDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbuildProjectsTriggersDeleteRequest extends SpeakeasyBase {
    pathParams: CloudbuildProjectsTriggersDeletePathParams;
    queryParams: CloudbuildProjectsTriggersDeleteQueryParams;
    security: CloudbuildProjectsTriggersDeleteSecurity;
}
export declare class CloudbuildProjectsTriggersDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
