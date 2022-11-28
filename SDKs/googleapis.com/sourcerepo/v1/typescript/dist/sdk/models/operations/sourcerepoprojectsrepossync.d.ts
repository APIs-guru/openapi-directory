import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SourcerepoProjectsReposSyncPathParams extends SpeakeasyBase {
    name: string;
}
export declare class SourcerepoProjectsReposSyncQueryParams extends SpeakeasyBase {
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
export declare class SourcerepoProjectsReposSyncSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SourcerepoProjectsReposSyncRequest extends SpeakeasyBase {
    pathParams: SourcerepoProjectsReposSyncPathParams;
    queryParams: SourcerepoProjectsReposSyncQueryParams;
    request?: Map<string, any>;
    security: SourcerepoProjectsReposSyncSecurity;
}
export declare class SourcerepoProjectsReposSyncResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
