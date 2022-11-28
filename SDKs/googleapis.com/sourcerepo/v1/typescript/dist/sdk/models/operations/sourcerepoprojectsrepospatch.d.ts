import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SourcerepoProjectsReposPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class SourcerepoProjectsReposPatchQueryParams extends SpeakeasyBase {
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
export declare class SourcerepoProjectsReposPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SourcerepoProjectsReposPatchRequest extends SpeakeasyBase {
    pathParams: SourcerepoProjectsReposPatchPathParams;
    queryParams: SourcerepoProjectsReposPatchQueryParams;
    request?: shared.UpdateRepoRequest;
    security: SourcerepoProjectsReposPatchSecurity;
}
export declare class SourcerepoProjectsReposPatchResponse extends SpeakeasyBase {
    contentType: string;
    repo?: shared.Repo;
    statusCode: number;
}
