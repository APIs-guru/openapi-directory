import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudbuildProjectsBuildsGetPathParams extends SpeakeasyBase {
    id: string;
    projectId: string;
}
export declare class CloudbuildProjectsBuildsGetQueryParams extends SpeakeasyBase {
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
export declare class CloudbuildProjectsBuildsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudbuildProjectsBuildsGetRequest extends SpeakeasyBase {
    pathParams: CloudbuildProjectsBuildsGetPathParams;
    queryParams: CloudbuildProjectsBuildsGetQueryParams;
    security: CloudbuildProjectsBuildsGetSecurity;
}
export declare class CloudbuildProjectsBuildsGetResponse extends SpeakeasyBase {
    build?: shared.Build;
    contentType: string;
    statusCode: number;
}
