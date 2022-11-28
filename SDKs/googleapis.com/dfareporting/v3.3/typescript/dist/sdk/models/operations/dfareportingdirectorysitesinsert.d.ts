import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingDirectorySitesInsertPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingDirectorySitesInsertQueryParams extends SpeakeasyBase {
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
export declare class DfareportingDirectorySitesInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingDirectorySitesInsertRequest extends SpeakeasyBase {
    pathParams: DfareportingDirectorySitesInsertPathParams;
    queryParams: DfareportingDirectorySitesInsertQueryParams;
    request?: shared.DirectorySite;
    security: DfareportingDirectorySitesInsertSecurity;
}
export declare class DfareportingDirectorySitesInsertResponse extends SpeakeasyBase {
    contentType: string;
    directorySite?: shared.DirectorySite;
    statusCode: number;
}
